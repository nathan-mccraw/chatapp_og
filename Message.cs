using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp
{
    public class Message
    {
        public int MessageId { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime TimeCreated { get; set; }
    }
}