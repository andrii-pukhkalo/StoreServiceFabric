﻿using Microsoft.AspNetCore.Mvc;

namespace Store.Frontend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
