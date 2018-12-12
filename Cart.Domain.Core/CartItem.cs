using System;

namespace Cart.Domain.Core
{
    [Serializable]
    public class CartItem
    {
        public Guid BookId { get; private set; }
        public int Count { get; private set; }

        public CartItem(Guid bookId, int count)
        {
            BookId = bookId;
            Count = count;
        }
    }
}