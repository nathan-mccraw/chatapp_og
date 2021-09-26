using System;
using ChatApp.Entities;

namespace ChatApp.Models
{
    public class Message
    {
        public Message(MessageEntity message)
        {
            this.MessageId = message.MessageId;
            this.Text = message.Text;
            this.User = new User(message.User);
            this.DateCreated = message.DateCreated;
        }

        public virtual int MessageId { get; set; }
        public virtual string Text { get; set; }
        public virtual User User { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}