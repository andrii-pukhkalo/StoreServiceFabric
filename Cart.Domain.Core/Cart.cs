using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cart.Domain.Core
{
    public class Cart
    {
        public List<CartItem> Items { get; private set; }

        public Cart()
        {
            Items = new List<CartItem>();
        }

        public Cart(Cart cart)
        {
            Items = new List<CartItem>();
            foreach (var item in cart.Items)
            {
                Items.Add(new CartItem(item.BookId, item.Count));

            }
        }
    }
}
