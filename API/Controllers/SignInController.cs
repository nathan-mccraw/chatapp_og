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

        // GET: api/<SignInController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/SignIn
        [HttpPost]
        //public void Post([FromBody] UserLogin user)
        //{
        //    Console.WriteLine(user.userName);
        //    //using (var session = _sessionFactory.OpenSession())
        //    //{
        //    //    var userEntity = session.Query<UserEntity>().Where(x => x.UserName == user.UserName).FirstOrDefault();
        //    //}
        //}

        // DELETE api/SignIn/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}