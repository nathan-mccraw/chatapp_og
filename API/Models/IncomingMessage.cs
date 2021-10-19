using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class IncomingMessage
    {
        public string Text { get; set; }
        public UserModel User { get; set; }
        public DateTime DateCreated { get; set; }
    }
}