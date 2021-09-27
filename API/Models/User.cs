using System;
using ChatApp.Entities;

namespace ChatApp.Models
{
    public class User
    {
        public User(UserEntity userEntity)
        {
            this.UserId = userEntity.UserId;
            this.UserName = userEntity.UserName;
            this.FirstName = userEntity.FirstName;
            this.LastName = userEntity.LastName;
            this.DateCreated = userEntity.DateCreated;
        }

        public virtual int UserId { get; set; }
        public virtual string UserName { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}