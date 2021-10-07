using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NHibernate;
using ChatApp.Models;
using System.Net;

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
                    return ("Wrong Password");
                }
            }
        }

        //Modify user
        // PUT api/<SignIn>
        [HttpPut]
        public object Put([FromBody] UserEntity user)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntity = session.Query<UserEntity>().Where(x => x.UserId == user.UserId).FirstOrDefault();
                if (userEntity.Password == user.Password)
                {
                    if (user.Username != "")
                        userEntity.Username = user.Username;
                    if (user.FirstName != "")
                        userEntity.FirstName = user.FirstName;
                    if (user.LastName != "")
                        userEntity.LastName = user.LastName;

                    using (var transmit = session.BeginTransaction())
                    {
                        session.Save(userEntity);
                        transmit.Commit();
                    }

                    return userEntity;
                }
                else
                {
                    return ("Wrong Password");
                    
                }
            }
        }

        // DELETE api/SignIn/5
        [HttpDelete("{id}")]
        public object Delete(SignInModel userAttempt)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var userEntity = session.Query<UserEntity>().Where(x => x.UserId == id).FirstOrDefault();
                if (userEntity.Password == userAttempt.Password)
                {
                    session.Delete(userEntity);
                    return ("Deleted User!");
                }
                else
                {
                    return ("Wrong password");
                }
            }
        }
    }
}