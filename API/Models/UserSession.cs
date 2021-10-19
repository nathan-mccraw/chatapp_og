using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class UserSession
    {
        public virtual int SessionId { get; set; }
        public virtual int UserId { get; set; }
        public virtual DateTime TokenExpirationDate { get; set; } = DateTime.Now.AddHours(.25);
        public virtual Guid UserToken { get; set; } = Guid.NewGuid();
    }
}