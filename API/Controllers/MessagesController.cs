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
    public class MessagesController : ControllerBase
    {
        private ISessionFactory _sessionFactory;

        public MessagesController(ISessionFactory sessionFactory)
        {
            _sessionFactory = sessionFactory;
        }

        // GET: api/messages
        [HttpGet]
        public List<Message> Get()
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var messageEntities = session.Query<MessageEntity>();
                return messageEntities.Select(message => new Message(message)).ToList();
            };
        }

        // GET api/Messages/5
        [HttpGet("{id}")]
        public MessageEntity Get(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var message = session.Query<MessageEntity>().Where(x => x.MessageId == id).FirstOrDefault();
                //UserEntity user = session.Get<UserEntity>(message.UserId);
                //message.Username = user.UserName;
                return message;
            };
        }

        // POST api/Messages
        [HttpPost]
        public void Post(Message postedMessage)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                using (var transmit = session.BeginTransaction())
                {
                    session.Save(postedMessage);
                    transmit.Commit();
                }
            };
        }

        // DELETE api/Messages/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var message = session.Query<Message>().Where(x => x.MessageId == id).FirstOrDefault();
                session.Delete(message);
            };
        }
    }
}