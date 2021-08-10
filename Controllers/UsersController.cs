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
    public class UsersController : ControllerBase
    {
        private List<User> users = new List<User>();

        public UsersController()
        {
            users.Add(new User { FirstName = "Nathan", LastName = "McCraw", UserName = "Nate", UserId = 1 });
            users.Add(new User { FirstName = "Jill", LastName = "McCraw", UserName = "Jill", UserId = 2 });
            users.Add(new User { FirstName = "Kathryn", LastName = "Blohm", UserName = "Kate", UserId = 3 });
            users.Add(new User { FirstName = "Zachary", LastName = "McCraw", UserName = "Zach", UserId = 4 });
            users.Add(new User { FirstName = "Eryn", LastName = "McCraw", UserName = "Eryn", UserId = 5 });
        }

        // GET: api/<MessagesController>
        [HttpGet]
        public List<User> Get()
        {
            return users;
        }

        // GET api/<MessagesController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return users.Where(x => x.UserId == id).FirstOrDefault();
        }

        // POST api/<MessagesController>
        [HttpPost]
        public void Post(User value)
        {
            users.Add(value);
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}