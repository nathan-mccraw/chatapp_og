using System;

namespace ChatApp.Models
{
    public class UserEntity
    {
        public virtual int UserId { get; set; }
        public virtual string Username { get; set; }
        public virtual string Password { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}