using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private List<Message> messages = new List<Message>();

        public MessagesController()
        {
            messages.Add(new Message { MessageId = 1, UserName = "Nate", Content = "HEY HEY" });
            messages.Add(new Message { MessageId = 2, UserName = "Air_En", Content = "What's Up" });
            messages.Add(new Message { MessageId = 3, UserName = "Jill", Content = "Worddddd Up dawg" });
            messages.Add(new Message { MessageId = 4, UserName = "Zach", Content = "How's it poppin" });
            messages.Add(new Message { MessageId = 5, UserName = "Kate", Content = "My man!" });
        }

        // GET: api/<MessagesController>
        [HttpGet]
        public List<Message> Get()
        {
            return messages;
        }

        // GET api/<MessagesController>/5
        [HttpGet("{id}")]
        public Message Get(int id)
        {
            return messages.Where(x => x.MessageId == id).FirstOrDefault();
        }

        // POST api/<MessagesController>
        [HttpPost]
        public void Post(Message value)
        {
            messages.Add(value);
        }

        // DELETE api/<MessagesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}