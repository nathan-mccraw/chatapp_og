using System;

namespace ChatApp
{
    public class User
    {
        public virtual int UserId { get; set; } = 0;
        public virtual string UserName { get; set; } = "";
        public virtual string FirstName { get; set; } = "";
        public virtual string LastName { get; set; } = "";
        public virtual DateTime DateCreated { get; set; }
    }
}