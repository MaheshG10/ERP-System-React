import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer A', orderDate: '2024-03-10', status: 'Pending' },
    { id: 2, customerName: 'Customer B', orderDate: '2024-02-29', status: 'Shipped' },
    { id: 3, customerName: 'Customer C', orderDate: '2024-02-14', status: 'Delivered' },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrderDetails = (orderId) => {
    const selected = orders.find((order) => order.id === orderId);
    setSelectedOrder(selected);
  };

  const handleCloseOrderDetails = () => {
    setSelectedOrder(null);
  };

  const handleUpdateOrderStatus = (orderId, currentStatus) => {
  
    let newStatus;

    if (currentStatus === 'Pending') {
      newStatus = 'Shipped';
    } else {
      newStatus = 'Delivered';
    }
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
  
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(null);
    }
  };

  return (
    <div className="container" align="center">
      <h2>Orders Management</h2>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products Management</Link>
        </li>
      </nav>
      <table className="order-list-table" border={2}>
        <thead>
          <tr style={{ backgroundColor: 'blue' }}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleViewOrderDetails(order.id)} className="gold">
                  View Details
                </button>
                <button onClick={() => handleUpdateOrderStatus(order.id, 'Shipped')}>
                  Update Status
                </button>
                <button onClick={() => handleDeleteOrder(order.id)} style={{ backgroundColor: '#FF0000' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View order details */}
      {selectedOrder && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customerName}</p>
          <p>Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
          <button onClick={handleCloseOrderDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;
