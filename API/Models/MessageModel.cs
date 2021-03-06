using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class MessageModel
    {
        public MessageModel(MessageEntity message)
        {
            this.Text = message.Text;
            this.User = new UserModel(message.User);
            this.DateCreated = message.DateCreated;
        }

        public string Text { get; set; }
        public UserModel User { get; set; }
        public DateTime DateCreated { get; set; }
    }
}