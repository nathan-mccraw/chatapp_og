using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NHibernate;
using ChatApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        private ISessionFactory _sessionFactory;

        public SignInController(ISessionFactory sessionFactory)
        {
            _sessionFactory = sessionFactory;
        }

        //login attempt: client will send username and password attempt.  API at this endpoint will compare username/password combo to database.  If successful then API will get
        //bearer token from Azure AD and send it back to the client.  The client will store this token for all other get/post requests.

        // GET: api/<SignInController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/SignIn
        [HttpPost]
        public object Post([FromBody] SignInModel userAttempt)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntity = session.Query<UserEntity>().Where(x => x.Username == userAttempt.Username).FirstOrDefault();
                if (userEntity.Password == userAttempt.Password)
                {
                    return userEntity;
                }
                else
                {
                    return ("bad response");
                }
            }
        }

        //{
        //    Console.WriteLine(user.userName);

        //}

        // DELETE api/SignIn/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}