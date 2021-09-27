using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class ChatMessage
    {
        public virtual string Text { get; set; }
        public virtual ChatUser User { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}