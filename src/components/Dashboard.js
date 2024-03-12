import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Dashboard = ({ totalProducts, totalOrders, orders }) => {
  const keyMetrics = [
    { label: 'Total Products : ', value: totalProducts },
    { label: 'Total Orders  : ', value: totalOrders },
  ];

  return (
    
    <div className="container" style={{ backgroundColor: '#33FFF0', padding: '10px', marginBottom: '20px' }}>
      <h2 align="center">Dashboard</h2>

      <div className="key-metrics-table">
        <table align='center'>
          <tbody>
            {keyMetrics.map((metric, index) => (
              <tr key={index}>
                <td>{metric.label}</td>
                <td>{metric.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="quick-navigation" align='center' style={{color:'blue',marginTop: '25px'}}>
        <Link to="/products">
          <button style={{backgroundColor:"blue",color:'white'}}>Go to Products</button>
        </Link>
        <h> or </h>
        <Link to="/orders">
          <button style={{backgroundColor:"blue",color:'white'}}>Go to Orders</button>
        </Link>
          

      </div>
    </div>
  );
};

export default Dashboard;
