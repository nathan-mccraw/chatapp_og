using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatApp.Models;

namespace ChatApp.Entities
{
    public class MessageEntity
    {
        public MessageEntity()
        {
        }

        public MessageEntity(MessageEntity message)
        {
            this.MessageId = message.MessageId;
            this.Text = message.Text;
            this.User = new User(message.User);
            this.DateCreated = message.DateCreated;
        }

        public virtual int MessageId { get; set; } = 0;
        public virtual string Text { get; set; } = "";
        public virtual User User { get; set; } = null;
        public virtual DateTime DateCreated { get; set; }
    }
}