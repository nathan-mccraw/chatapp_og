using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private List<User> _users = new List<User>();

        public UsersController()
        {
        }

        // GET: api/<MessagesController>
        [HttpGet]
        public List<User> Get()
        {
            var connectionString = "Host=localhost; Port=5432; Username=postgres; Password='N*t3J*ll'; Database='chat_app'";

            using var connection = new NpgsqlConnection(connectionString);
            connection.Open();

            string usersFromDatabase = "SELECT * FROM users";
            using var usersCommand = new NpgsqlCommand(usersFromDatabase, connection);

            using NpgsqlDataReader usersReader = usersCommand.ExecuteReader();

            var users = new List<User>();

            if (usersReader.HasRows)
            {
                Console.WriteLine("sending users");

                while (usersReader.Read())
                {
                    users.Add(new User { UserId = usersReader.GetInt32(0), UserName = usersReader.GetString(1), FirstName = usersReader.GetString(2), LastName = usersReader.GetString(3), DateCreated = usersReader.GetDateTime(4) });
                }
            }
            else
            {
                Console.WriteLine("No messages found");
            }
            connection.Close();
            return users;
        }

        // GET api/<MessagesController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _users.Where(x => x.UserId == id).FirstOrDefault();
        }

        // POST api/<MessagesController>
        [HttpPost]
        public void Post(User value)
        {
            _users.Add(value);
            Console.WriteLine(value.UserName);
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}