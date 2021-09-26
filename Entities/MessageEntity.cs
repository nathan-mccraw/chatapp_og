﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Entities
{
    public class MessageEntity
    {
        public virtual int MessageId { get; set; }
        public virtual string Text { get; set; }
        public virtual int UserId { get; set; }
        public virtual string Username { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}