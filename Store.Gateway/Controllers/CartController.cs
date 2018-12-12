using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cart.Service.Interfaces;
using Microsoft.ServiceFabric.Services.Remoting.Client;
using Microsoft.ServiceFabric.Services.Client;
using Cart.Service.Interfaces.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Gateway.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly ICartService _cartService;

        public CartController()
        {
            _cartService = ServiceProxy
                .Create<ICartService>(new Uri("fabric:/Store/Cart.Service"),
                    new ServicePartitionKey(1));

        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpGet("{id}")]
        [Route("get-cart")]
        public async Task<IActionResult> getCart()
        {
            try
            {
                Guid id = Guid.Empty;

                var cart = await _cartService.GetCart(id);
                return Ok(cart);
            }
            catch (Exception e)
            {

                throw;
            }
        }

        // POST api/values
        [HttpPost]
        [Route("add-item")]
        public async Task<IActionResult> addItem([FromBody]CartItemDTO cartItemDTO)
        {
            Guid id = Guid.Empty;//AddCookie();

            try
            {
                var cart = await _cartService.AddToCart(id, cartItemDTO);
                return Ok(cart);
            }
            catch (Exception e)
            {

                throw;
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private Guid AddCookie()
        {
            if (!Request.Cookies.ContainsKey("id"))
            {
                var copt = new CookieOptions();

                copt.Expires = DateTimeOffset.Now.AddMinutes(5);

                Guid id = Guid.NewGuid();

                Response.Cookies.Append("id", id.ToString(), copt);

                return id;
            } else
            {
                var id = Request.Cookies["id"].FirstOrDefault();
                return new Guid(id.ToString());
            }
        }
    }
}
