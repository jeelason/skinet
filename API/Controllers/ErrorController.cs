using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("errors/{code}")]
    public class ErrorController : BaseApiController
    {
    //     private readonly ILogger<ErrorController> _logger;

    //     public ErrorController(ILogger<ErrorController> logger)
    //     {
    //         _logger = logger;
    //     }

        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}