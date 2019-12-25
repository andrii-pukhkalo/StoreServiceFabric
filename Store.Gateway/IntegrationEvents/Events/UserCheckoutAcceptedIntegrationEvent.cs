using Store.EventBus.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Gateway.IntegrationEvents.Events
{
    public class UserCheckoutAcceptedIntegrationEvent : IntegrationEvent
    {
        public Cart.Domain.Core.Cart cart;
        private Guid userId;

        public UserCheckoutAcceptedIntegrationEvent(Guid userId, Cart.Domain.Core.Cart cart)
        {
            this.userId = userId;
            this.cart = cart;
        }
    }
}
