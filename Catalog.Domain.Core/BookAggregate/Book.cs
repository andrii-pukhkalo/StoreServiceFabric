using System;

namespace Catalog.Domain.Core.BookAggregate
{
    public class Book
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public Publisher Publisher { get; private set; }
        public int AvailableStock { get; private set; }
        public Price Price { get; private set; }
    }
}
