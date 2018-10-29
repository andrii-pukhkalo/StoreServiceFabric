namespace Catalog.Domain.Core.BookAggregate
{
    public class Address
    {
        public string City { get; private set; }
        public string Street { get; private set; }
        public string House { get; private set; }
        public string ZipCode { get; private set; }
    }
}