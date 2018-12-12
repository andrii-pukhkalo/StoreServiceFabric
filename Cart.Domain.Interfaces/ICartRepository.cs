using Cart.Domain.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cart.Domain.Interfaces
{
    public interface ICartRepository
    {
        Task<Core.Cart> AddToCart(Guid cartId, CartItem cartItem);
        Task<Core.Cart> GetCart(Guid cartId);
    }
}
