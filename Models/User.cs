using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace ToolBox.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "You must provide your name")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "You must provide your email")]
        public string Email { get; set; }

        public int ZipCode { get; set; }

        public bool IsContractor { get; set; }

        [JsonIgnore]
        public string HashedPassword { get; set; }

        public string Password
        {
            set
            {
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }

        public bool IsValidPassword(string password)
        {
            var passwordVerification = new PasswordHasher<User>().VerifyHashedPassword(this, this.HashedPassword, password);

            return passwordVerification == PasswordVerificationResult.Success;
        }
    }
}