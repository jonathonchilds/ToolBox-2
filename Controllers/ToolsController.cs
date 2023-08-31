using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolBox.Models;

namespace ToolBox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToolsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that receives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ToolsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Tools
        //
        // Returns a list of all your Tools
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tool>>> GetTools(string filter)
        {
            // Uses the database context in `_context` to request all of the Tools, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.Tools.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.Tools.Where(row => row.Name.ToLower().Contains(filter.ToLower())).OrderBy(row => row.Id).ToListAsync();
            }
        }


        // GET: api/Tools/5
        //
        // Fetches and returns a specific tool by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Tool>> GetTool(int id)
        {
            // Find the tool in the database using `FindAsync` to look it up by id
            var tool = await _context.Tools.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (tool == null)
            {
                // Return a `404` response to the client indicating we could not find a tool with this id
                return NotFound();
            }

            //  Return the tool as a JSON object.
            return tool;
        }

        // the `body` of the request is parsed and then made available to us as a Tool
        // variable named tool. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Tool POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTool(int id, Tool tool)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != tool.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in tool to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from tool
            _context.Entry(tool).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ToolExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(tool);
        }

        // POST: api/Tools
        //
        // The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Tool POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Tool>> PostTool(Tool tool)
        {
            tool.UserId = GetCurrentUserId();

            _context.Tools.Add(tool);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetTool", new { id = tool.Id }, tool);
        }

        // DELETE: api/Tools/5

        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteTool(int id)
        {
            var tool = await _context.Tools.FindAsync(id);
            if (tool == null)
            {
                return NotFound();
            }
            if (tool.UserId != GetCurrentUserId())
            {
                var response = new
                {
                    status = 401,
                    errors = new List<string>() { "You can only delete tools that you've created from this account." }
                };
                return Unauthorized(response);
            }
            _context.Tools.Remove(tool);
            await _context.SaveChangesAsync();
            return Ok(tool);
        }


        private bool ToolExists(int id)
        {
            return _context.Tools.Any(tool => tool.Id == id);
        }


        // Private helper method to get the JWT claim related to the user ID
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }

    }
}
