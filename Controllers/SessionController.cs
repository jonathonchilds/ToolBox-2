using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ToolBox.Models;
using ToolBox.Utils;

namespace ToolBox.Controllers
{

    public class LoginUser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly DatabaseContext _context;
        readonly protected string JWT_KEY;
        // Constructor that receives a reference to your database context
        // and stores it in _context_ for you to use in your API methods
        public SessionController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            JWT_KEY = config["JWT_KEY"];
        }

        [HttpPost]
        public async Task<ActionResult> Login(LoginUser loginUser)
        {
            var foundUser = await _context.Users.FirstOrDefaultAsync(user => user.Email == loginUser.Email);

            if (foundUser != null && foundUser.IsValidPassword(loginUser.Password))
            {
                HttpContext.Session.SetInt32("UserId", foundUser.Id);

                var response = new
                {
                    token = new TokenGenerator(JWT_KEY).TokenFor(foundUser),
                    user = foundUser
                };
                return Ok(response);
            }
            else
            {
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "User does not exist" }
                };

                return BadRequest(response);
            }
        }
    }
}