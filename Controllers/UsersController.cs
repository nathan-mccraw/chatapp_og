using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using NHibernate;
using ChatApp.Models;
using ChatApp.Entities;

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
                List<UserEntity> userEntities = session.Query<UserEntity>().ToList();
                List<User> users = new List<User>();
                foreach (var user in userEntities)
                {
                    users.Add(new User(user));
                }
                return users;
            };
        }

        // GET: api/<UsersController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntity = session.Query<UserEntity>().Where(x => x.UserId == id).FirstOrDefault();
                User user = new User(userEntity);
                return user;
            };
        }

        // POST: api/<UsersController>
        [HttpPost]
        public void Post(UserEntity user)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                using (var transmit = session.BeginTransaction())
                {
                    session.Save(user);
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