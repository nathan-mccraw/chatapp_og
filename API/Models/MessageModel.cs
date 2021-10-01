using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class MessageModel
    {
        public string Text { get; set; }
        public string Username { get; set; }
        public DateTime DateCreated { get; set; }
    }
}