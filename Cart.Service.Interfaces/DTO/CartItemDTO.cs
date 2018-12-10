using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cart.Service.Interfaces.DTO
{
    public class CartItemDTO
    {
        public string bookId { get; set; }
        public int count { get; set; }
    }
}
