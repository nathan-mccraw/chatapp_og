using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;
using NHibernate;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private ISessionFactory _sessionFactory;

        public UsersController(ISessionFactory sessionFactory)
        {
            _sessionFactory = sessionFactory;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public List<User> Get()
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var users = session.Query<User>();
                return users.ToList();
            };
        }

        // GET: api/<UsersController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var users = session.Query<User>().Where(x => x.UserId == id).FirstOrDefault();
                return users;
            };
        }

        // POST: api/<UsersController>
        [HttpPost]
        public void Post(User value)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                using (var transmit = session.BeginTransaction())
                {
                    session.Save(value);
                    transmit.Commit();
                }
            };
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}