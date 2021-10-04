﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class MessageEntity
    {
        //public MessageEntity()
        //{
        //}

        //public MessageEntity(IncomingMessage message)
        //{
        //    this.Text = message.Text;
        //    this.User = (UserEntity)message.User;
        //    this.DateCreated = message.DateCreated;
        //}

        public virtual int MessageId { get; set; }
        public virtual string Text { get; set; }
        public virtual UserEntity User { get; set; }
        public virtual DateTime DateCreated { get; set; } = DateTime.Now;
    }
}