using System;

namespace ChatApp.Models
{
    public class UserEntity
    {
        public virtual int UserId { get; set; }
        public virtual string UserName { get; set; }
        private string Password { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual DateTime DateCreated { get; set; }

        public virtual bool IsPasswordValid(string passwordInput)
        {
            return (passwordInput == this.Password);
        }
    }
}