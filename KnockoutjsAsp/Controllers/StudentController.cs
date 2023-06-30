using Microsoft.AspNetCore.Mvc;

namespace KnockoutjsAsp.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
