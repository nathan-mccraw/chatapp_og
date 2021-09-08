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
            messages.Add(new Message { MessageId = 2, UserName = "Eryn", Content = "What's Up" });
            messages.Add(new Message { MessageId = 3, UserName = "Jill", Content = "Worddddd Up dawg" });
            messages.Add(new Message { MessageId = 4, UserName = "Zach", Content = "How's it poppin" });
            messages.Add(new Message { MessageId = 5, UserName = "Kate", Content = "My man!" });
            messages.Add(new Message { MessageId = 6, UserName = "Nate", Content = "HEY HEY" });
            messages.Add(new Message { MessageId = 7, UserName = "Eryn", Content = "What's Up" });
            messages.Add(new Message { MessageId = 8, UserName = "Jill", Content = "Worddddd Up dawg" });
            messages.Add(new Message { MessageId = 9, UserName = "Zach", Content = "How's it poppin" });
            messages.Add(new Message { MessageId = 10, UserName = "Kate", Content = "My man!" });
            messages.Add(new Message { MessageId = 11, UserName = "Nate", Content = "HEY HEY" });
            messages.Add(new Message { MessageId = 12, UserName = "Eryn", Content = "What's Up" });
            messages.Add(new Message { MessageId = 13, UserName = "Jill", Content = "Worddddd Up dawg" });
            messages.Add(new Message { MessageId = 14, UserName = "Zach", Content = "How's it poppin" });
            messages.Add(new Message { MessageId = 15, UserName = "Kate", Content = "My man!" });
        }

        // GET: api/messages
        [HttpGet]
        public List<Message> Get()
        {
            return messages;
        }

        // GET api/Messages/5
        [HttpGet("{id}")]
        public Message Get(int id)
        {
            return messages.Where(x => x.MessageId == id).FirstOrDefault();
        }

        // POST api/Messages
        [HttpPost]
        public void Post(Message value)
        {
            messages.Add(value);
            Console.WriteLine(value);
        }

        // DELETE api/Messages/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}