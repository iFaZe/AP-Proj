//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Profile
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public string tele { get; set; }
        public int Liscence { get; set; }
        public string Password { get; set; }
        public byte[] ProPhoto { get; set; }
        public Nullable<int> TotGamBirSho { get; set; }
        public Nullable<int> TotProBirSho { get; set; }
    
        public virtual HuntingSession HuntingSession { get; set; }
        public virtual ViolationType ViolationType { get; set; }
    }
}
