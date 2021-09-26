﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class Message
    {
        public virtual int MessageId { get; set; }
        public virtual string Text { get; set; }
        public virtual User User { get; set; }
        public virtual DateTime DateCreated { get; set; }
    }
}