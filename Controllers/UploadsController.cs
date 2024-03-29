using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace TacoTuesday.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UploadsController : ControllerBase
    {
        private readonly string CLOUDINARY_CLOUD_NAME;
        private readonly string CLOUDINARY_API_KEY;
        private readonly string CLOUDINARY_API_SECRET;


        public UploadsController(IConfiguration config)
        {
            CLOUDINARY_CLOUD_NAME = config["CLOUDINARY_CLOUD_NAME"];
            CLOUDINARY_API_KEY = config["CLOUDINARY_API_KEY"];
            CLOUDINARY_API_SECRET = config["CLOUDINARY_API_SECRET"];
        }

        private readonly HashSet<string> VALID_CONTENT_TYPES = new HashSet<string> {
    "image/jpg",
    "image/jpeg",
    "image/pjpeg",
    "image/gif",
    "image/x-png",
    "image/png",
};


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [RequestSizeLimit(10_000_000)]
        public async Task<ActionResult> Upload(IFormFile file)
        {
            var contentType = file.ContentType.ToLower();
            if (!VALID_CONTENT_TYPES.Contains(contentType))
            {
                return BadRequest("Not Valid Image");
            }
            // Create and configure a client object to be able to upload to Cloudinary
            var cloudinaryClient = new Cloudinary(new Account(CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET));

            // Create an object describing the upload we are going to process.
            // We will provide the file name and the stream of the content itself.
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(file.FileName, file.OpenReadStream())
            };

            // Upload the file to the server
            ImageUploadResult result = await cloudinaryClient.UploadLargeAsync(uploadParams);

            // If the status code is an "OK" then the upload was accepted so we will return
            // the URL to the client
            if (result.StatusCode == HttpStatusCode.OK)
            {
                var urlOfUploadedFile = result.SecureUrl.AbsoluteUri;

                return Ok(new { url = urlOfUploadedFile });
            }
            else
            {
                // Otherwise there was some failure in uploading
                return BadRequest("Upload failed");
            }
        }
    }
}