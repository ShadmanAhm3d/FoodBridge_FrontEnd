import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/orders/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Your Orders</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div key={order._id} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="relative pb-2/3">
                <img className="absolute h-full w-full object-cover" src={order.post.image} alt={order.post.title} />
              </div>
              <div className="p-6 relative z-10 bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-gray-900">{order.post.title}</h3>
                <p className="mt-2 text-base text-gray-500">{order.post.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-900">
                    Quantity: {order.quantity}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    Status: {order.status}
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Ordered on: {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
