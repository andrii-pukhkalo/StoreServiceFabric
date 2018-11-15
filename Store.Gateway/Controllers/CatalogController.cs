using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Catalog.Service.Interfaces;
using Microsoft.ServiceFabric.Services.Remoting.Client;
using Microsoft.ServiceFabric.Services.Client;

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

        [HttpGet]
        [Route("items")]
        public async Task<IActionResult> Items()
        {
            var all = await _catalogService.GetAll();
            return Ok(all);
        }

        [HttpGet]
        [Route("items/{id:Guid}")]
        public async Task<IActionResult> Items(Guid id)
        {
            var book = await _catalogService.GetById(id);
            return Ok(book);
        }
    }
}
