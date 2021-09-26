using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NHibernate;
using ChatApp.Entities;
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

        //// GET api/SignIn/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/SignIn
        [HttpPost]
        public void Post([FromBody] User user)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntity = session.Query<UserEntity>().Where(x => x.UserName == user.UserName).FirstOrDefault();
            }
        }

        //// PUT api/SignIn/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/SignIn/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}