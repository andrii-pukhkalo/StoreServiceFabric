using Cart.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cart.Domain.Core;
using Microsoft.ServiceFabric.Data;
using Microsoft.ServiceFabric.Data.Collections;

namespace Cart.Service.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly IReliableStateManager _stateManager;

        public CartRepository(IReliableStateManager stateManager)
        {
            _stateManager = stateManager;
        }

       

        private async Task<IReliableDictionary<Guid, Cart.Domain.Core.Cart>> GetCarts()
        {
            return await _stateManager
                .GetOrAddAsync<IReliableDictionary<Guid, Cart.Domain.Core.Cart>>("carts");
        }

        public async Task<Domain.Core.Cart> AddToCart(Guid cartId, CartItem cartItem)
            {
            var carts = await GetCarts();

            using (var transaction = _stateManager.CreateTransaction())
            {
                var cart = await carts.TryGetValueAsync(transaction, cartId);

                if (cart.HasValue)
                {
                    var newCart = new Cart.Domain.Core.Cart(cart.Value);

                    newCart.Items.Add(cartItem);

                    await carts.SetAsync(transaction, cartId, newCart);
                    await transaction.CommitAsync();

                    return newCart;
                }
                else
                {
                    var newCart = new Cart.Domain.Core.Cart();

                    newCart.Items.Add(cartItem);

                    await carts.SetAsync(transaction, cartId, newCart);
                    await transaction.CommitAsync();

                    return newCart;
                }
            }
        }
    }
}
