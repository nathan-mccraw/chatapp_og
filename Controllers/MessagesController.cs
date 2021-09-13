using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Npgsql;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private List<Message> _messages = new List<Message>();

        public MessagesController()
        {
        }

        // GET: api/messages
        [HttpGet]
        public List<Message> Get()
        {
            var connectionString = "Host=localhost; Port=5432; Username=postgres; Password='N*t3J*ll'; Database='chat_app'";

            using var connection = new NpgsqlConnection(connectionString);
            connection.Open();

            string messagesFromDatabase = "SELECT * FROM messages";
            using var messagesCommand = new NpgsqlCommand(messagesFromDatabase, connection);

            using NpgsqlDataReader messagesReader = messagesCommand.ExecuteReader();

            var messages = new List<Message>();

            if (messagesReader.HasRows)
            {
                Console.WriteLine("Message connection open");

                while (messagesReader.Read())
                {
                    messages.Add(new Message { MessageId = messagesReader.GetInt32(0), Text = messagesReader.GetString(1), UserId = messagesReader.GetInt32(2), DateCreated = messagesReader.GetDateTime(3) });
                }
            }
            else
            {
                Console.WriteLine("No messages found");
            }
            connection.Close();

            return messages;
        }

        // GET api/Messages/5
        [HttpGet("{id}")]
        public Message Get(int id)
        {
            return _messages.Where(x => x.MessageId == id).FirstOrDefault();
        }

        // POST api/Messages
        [HttpPost]
        public void Post(Message value)
        {
            _messages.Add(value);
            Console.WriteLine(value.Text);
        }

        // DELETE api/Messages/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}