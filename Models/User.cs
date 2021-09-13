using System;

namespace ChatApp
{
    public class User
    {
        public int UserId { get; set; } = 0;
        public string UserName { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public DateTime DateCreated { get; set; }
    }
}