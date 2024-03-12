import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';


const OrdersCalendar = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getOrdersForSelectedDate = () => {
    if (!selectedDate || !orders) return [];

    const ordersForDate = orders.filter(
      (order) => new Date(order.expectedDeliveryDate).toDateString() === selectedDate.toDateString()
    );

    return ordersForDate;
  };

  const getDueOrders = () => {
    if (!orders) return [];

    const dueOrders = orders.filter(
      (order) => new Date(order.expectedDeliveryDate) <= new Date() && order.status !== 'Delivered'
    );

    return dueOrders;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 >Orders Calendar View</h2>
      <nav className="nav">
        <div className="navbar">
          <div className="navbar-1">
            <Link to="/" className="nav-item nav-btn res-nav">
              Home
            </Link>
            <Link to="/products" className="nav-item nav-btn res-nav">
              Products Management
            </Link>
            <Link to="/orders" className="nav-item nav-btn res-nav">
              Orders Management
            </Link>
          </div>
        </div>
      </nav>
      <Calendar
        tileContent={({ date, view }) => {
          if (view === 'month' && orders) {
            const ordersOnDate = orders.filter(
              (order) => new Date(order.expectedDeliveryDate).toDateString() === date.toDateString()
            );

            return ordersOnDate.length > 0 ? <div>{ordersOnDate.length} orders</div> : null;
          }
        }}
        onClickDay={handleDateClick}
      />

      {selectedDate && (
        <div>
          <h3>Orders due for delivery on {selectedDate.toDateString()} 
          <br></br>
            Some orders are Due </h3>
          <ul>
            {getOrdersForSelectedDate().map((order) => (
              <li key={order.id}>{order.customerName}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <ul>
          {getDueOrders().map((order) => (
            <li key={order.id}>{order.customerName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrdersCalendar;
