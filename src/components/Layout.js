import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#61DBFB' }}>ERP System with React</h1>
      <nav className="main-nav">
        <div className="navbar">
          <div className="navbar-1">
            <Link to="/" className="nav-item nav-btn res-nav">
              Dashboard
            </Link>
            <Link to="/products" className="nav-item nav-btn res-nav">
              Products Management
            </Link>
            <Link to="/orders" className="nav-item nav-btn res-nav">
              Orders Management
            </Link>
            <Link to="/orders/calendar" className="nav-item nav-btn res-nav">
              Orders Calendar
            </Link>
          </div>
        </div>
      </nav>
      <div>{children}
      </div>
    </div>
  );
};

export default Layout;
