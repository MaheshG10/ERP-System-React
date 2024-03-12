import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import Layout from './components/Layout';
import OrdersCalendar from './components/OrdersCalendar';

import './Home.css';

const App = () => {
  const totalProducts = 15;
  const totalOrders = 10;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard title="Welcome to Your Dashboard" totalProducts={totalProducts} totalOrders={totalOrders} />
            </Layout>
          }
        />
        <Route path="/products" element={<ProductsManagement />} />
        <Route path="/orders" element={<OrdersManagement />} />
        <Route path="/orders/calendar" element={<OrdersCalendar />} />

      </Routes>
    </Router>
  );
};

export default App;
