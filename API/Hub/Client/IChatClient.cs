using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatApp.Models;

namespace ChatApp.API.Hub.Client
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}