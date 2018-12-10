using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Catalog.Service.Interfaces;
using Microsoft.ServiceFabric.Services.Remoting.Client;
using Microsoft.ServiceFabric.Services.Client;
using System.Net.Http;
using System.Net.Http.Formatting;
using Microsoft.AspNetCore.Http;
using Catalog.Domain.Core.BookAggregate;
using System.Net;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Gateway.Controllers
{
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {
        private readonly ICatalogService _catalogService;

        public CatalogController()
        {
            _catalogService = ServiceProxy
                .Create<ICatalogService>(new Uri("fabric:/Store/Catalog.Service"),
                    new ServicePartitionKey());
        }

        //protected override void Initialize(RequestContext requestContext)
        //{
        //    AddCookie();
        //}

        [HttpGet]
        [Route("items")]
        public async Task<IActionResult> Items()
        {
            AddCookie();

            //var cookie = new CookieHeaderValue("id", "12345"); // имя куки - id, значение - 12345
            //cookie.Expires = DateTimeOffset.Now.AddDays(1); // время действия куки - 1 день
            //cookie.Domain = Request.RequestUri.Host; // домен куки
            //cookie.Path = "/"; // путь куки
            //var response = Request.CreateResponse<IEnumerable<Book>>(HttpStatusCode.OK, db.Books);
            //response.Headers.AddCookies(new CookieHeaderValue[] { cookie });
            //return response;


            //get cookie
            //string Id = "";

            //CookieHeaderValue cookie = Request.Headers.GetCookies("id").FirstOrDefault();
            //if (cookie != null)
            //{
            //    Id = cookie["id"].Value;
            //}

            var all = await _catalogService.GetAll();
            return Ok(all);
        }

        [HttpGet]
        [Route("items/{id:Guid}")]
        public async Task<IActionResult> Items(Guid id)
        {
            AddCookie();
            var book = await _catalogService.GetById(id);
            return Ok(book);
        }

        private void AddCookie()
        {
            if (!Request.Cookies.ContainsKey("id"))
            {
                var copt = new CookieOptions();

                copt.Expires = DateTimeOffset.Now.AddMinutes(1);

                Guid id = Guid.NewGuid();

                Response.Cookies.Append("id", id.ToString(), copt);
            }
        }
    }
}
