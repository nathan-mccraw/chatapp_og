using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatApp.API.Hub.Client;
using ChatApp.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Api.Hub
{
    public class ChatHub : Hub<IChatClient>
    { }
}