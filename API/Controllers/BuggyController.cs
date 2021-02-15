using System.Net;
using System.Net.Http;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;

        }

        // [Authorize]
        // [HttpGet("auth")]
        // public ActionResult<string> GetSecret()
        // {
        //     return "secret text";
        // }


        [HttpGet("auth")]
        public StatusCodeResult Unauthorize()
        {
            return StatusCode(401);
        }


        // [HttpGet("not-found")]
        // public ActionResult<AppUser> GetNotFound()
        // {
        //     var thing = _context.Users.Find(-1);
        //     if (thing == null) return NotFound();
        //     return Ok(thing);
        // }

        [HttpGet("not-found")]
        public StatusCodeResult GetNotFound()
        {
            var thing = _context.Users.Find(-1);
            if (thing == null) return StatusCode(404);
            return StatusCode(200);
        }



        [HttpGet("server-error")]
        public ActionResult<string> GetServererror()
        {
            var thing = _context.Users.Find(-1);
            var thingToReturn = thing.ToString();
            return thingToReturn;
        }

        // [HttpGet("bad-request")]
        // public ActionResult<string> GetBadRequest()
        // {
        //     // return (StatusCode(400, "not good"));
        //     return BadRequest("This was not a good request");
        // }

        [HttpGet("bad-request")]
        public StatusCodeResult GetBadRequest()
        {

            return StatusCode(400);
        }


    }
}