using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatApp.Entities;

namespace ChatApp.API.Hub.Client
{
    public interface IChatClient
    {
        Task ReceiveMessage(MessageEntity message);
    }
}