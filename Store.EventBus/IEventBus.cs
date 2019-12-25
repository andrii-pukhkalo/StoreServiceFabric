using Store.EventBus.Events;

namespace Store.EventBus
{
    public interface IEventBus
    {
        void Publish(IntegrationEvent @event);
    }
}
