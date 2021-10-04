using ChatApp.Models;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {

        private ISessionFactory _sessionFactory;

        public SignUpController(ISessionFactory sessionFactory)
        {
            _sessionFactory = sessionFactory;
        }

        // POST api/<SignUp>
        [HttpPost]
        public string Post([FromBody] UserEntity userAttempt)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                bool usernameExist = session.Query<UserEntity>().Where(x => x.Username == userAttempt.Username).Any();
                if (usernameExist)
                {
                    return ("Username already Exist");
                }
                else
                {
                    Console.WriteLine(userAttempt.Password);
                    using (var transmit = session.BeginTransaction())
                    {
                        session.Save(userAttempt);
                        transmit.Commit();
                    }
                    return ("User created, please sign in");
                }
            }
        }
    }
}