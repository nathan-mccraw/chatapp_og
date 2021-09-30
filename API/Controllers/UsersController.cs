using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using NHibernate;
using ChatApp.Models;

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
        public List<UserEntity> Get()
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntities = session.Query<UserEntity>();
                //return userEntities.Select(user => new User(user)).ToList();
                return userEntities.ToList();
            };
        }

        // GET: api/<UsersController>/5
        [HttpGet("{id}")]
        public UserEntity Get(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntity = session.Query<UserEntity>().Where(x => x.UserId == id).FirstOrDefault();
                //return new User(userEntity);
                return userEntity;
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
            using (var session = _sessionFactory.OpenSession())
            {
                var user = session.Query<UserEntity>().Where(x => x.UserId == id).FirstOrDefault();
                session.Delete(user);
            };
        }
    }
}