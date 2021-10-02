using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using NHibernate;
using Microsoft.AspNetCore.SignalR;
using ChatApp.Models;
using ChatApp.Api.Hub;
using ChatApp.API.Hub.Client;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private ISessionFactory _sessionFactory;
        private readonly IHubContext<ChatHub, IChatClient> _chatHub;

        public MessagesController(ISessionFactory sessionFactory, IHubContext<ChatHub, IChatClient> chatHub)
        {
            _sessionFactory = sessionFactory;
            _chatHub = chatHub;
        }

        // GET: api/messages
        [HttpGet]
        public List<MessageModel> Get()
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var messages = session.Query<MessageEntity>()
                    .Select(message => new MessageModel
                        {
                            Text = message.Text,
                            Username = message.User.Username,
                            DateCreated = message.DateCreated
                        }
                    );
                return messages.ToList();
            };
        }

        // GET api/Messages/5
        [HttpGet("{id}")]
        public MessageEntity Get(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var message = session.Query<MessageEntity>().FirstOrDefault(x => x.MessageId == id);
                return message;
            };
        }

        // POST api/Messages
        [HttpPost]
        public async Task Post(MessageEntity postedMessage)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                using (var transmit = session.BeginTransaction())
                {
                    session.Save(postedMessage);
                    transmit.Commit();
                }
            };
            var outgoingMessage = new MessageModel
            {
                Text = postedMessage.Text,
                Username = postedMessage.User.Username,
                DateCreated = postedMessage.DateCreated
            };
            await _chatHub.Clients.All.ReceiveMessage(outgoingMessage);
        }

        // DELETE api/Messages/5
        [Authorize]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                var message = session.Query<MessageEntity>().Where(x => x.MessageId == id).FirstOrDefault();
                session.Delete(message);
            };
        }
    }
}