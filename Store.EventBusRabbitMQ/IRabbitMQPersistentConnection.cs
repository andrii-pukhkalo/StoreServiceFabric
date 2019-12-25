using RabbitMQ.Client;
using System;

namespace Store.EventBusRabbitMQ
{
    public interface IRabbitMQPersistentConnection : IDisposable
    {  
        bool IsConnected { get; }

        bool TryConnect();

        IModel CreateModel();
    }
}