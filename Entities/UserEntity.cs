using System;

namespace ChatApp.Entities
{
    public class UserEntity
    {
        public virtual int UserId { get; set; } = 0;
        public virtual string UserName { get; set; } = "";
        public virtual string Password { get; set; } = "";
        public virtual string FirstName { get; set; } = "";
        public virtual string LastName { get; set; } = "";
        public virtual DateTime DateCreated { get; set; }
    }
}