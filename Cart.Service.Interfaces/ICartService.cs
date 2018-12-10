using Cart.Domain.Core;
using Cart.Service.Interfaces.DTO;
using Microsoft.ServiceFabric.Services.Remoting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cart.Service.Interfaces
{
    public interface ICartService : IService
    {
        Task<Cart.Domain.Core.Cart> AddToCart(Guid cartId, CartItemDTO cartItem);
    }
}
