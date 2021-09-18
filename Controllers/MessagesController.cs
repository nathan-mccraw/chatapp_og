using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Npgsql;
using NHibernate.Cfg;
using NHibernate.Dialect;
using NHibernate.Driver;
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

            //var messages = new List<Message>();

            if (messagesReader.HasRows)
            {
                while (messagesReader.Read())
                {
                    _messages.Add(new Message { MessageId = messagesReader.GetInt32(0), Text = messagesReader.GetString(1), UserId = messagesReader.GetInt32(2), DateCreated = messagesReader.GetDateTime(3) });
                }
            }
            else
            {
                Console.WriteLine("No messages found");
            }
            connection.Close();
            connection.Open();

            _messages.ForEach((message) =>
           {
               string userById = "SELECT user_name FROM users WHERE user_id=@userId";

               using var usersCommand = new NpgsqlCommand(userById, connection);
               int userId = message.UserId;
               usersCommand.Parameters.AddWithValue("@userId", userId);

               using NpgsqlDataReader usersReader = usersCommand.ExecuteReader();
               while (usersReader.Read())
                   message.Username = usersReader.GetString(0);
           });

            connection.Close();

            return _messages;
        }

        // GET api/Messages/5
        [HttpGet("{id}")]
        public Message Get(int id)
        {
            return _messages.Where(x => x.MessageId == id).FirstOrDefault();
        }

        // POST api/Messages
        [HttpPost]
        public void Post(Message postedMessage)
        {
            var connectionString = "Host=localhost; Port=5432; Username=postgres; Password='N*t3J*ll'; Database='chat_app'";

            using var connection = new NpgsqlConnection(connectionString);
            connection.Open();

            string addMessageToDB = "SELECT * FROM messages";
            using var addMessageCommand = new NpgsqlCommand(addMessageToDB, connection);

            using NpgsqlDataReader messagesReader = addMessageCommand.ExecuteReader();

            connection.Close();

            _messages.Add(postedMessage);
        }

        // DELETE api/Messages/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}