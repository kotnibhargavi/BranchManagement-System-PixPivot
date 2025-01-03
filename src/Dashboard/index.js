import React from 'react';
import Sidebar from '../Sidebar';  // Sidebar component
import './index.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Content Section */}
      <div className="content">
        {/* Header Section with Branch Selection and Date */}
        <div className="header">
          <div className="branch-select">
            <label>Branch:</label>
            <select>
              <option>Branch 1</option>
              <option>Branch 2</option>
              <option>Branch 3</option>
            </select>
          </div>
          <div className="date-picker">
            <label>Date:</label>
            <input type="date" />
          </div>
        </div>

        {/* Cards Section with Different Coupons Information */}
        <div className="cards">
          <div className="card" style={{ backgroundColor: 'lightcoral' }}>
            <h3>Coupon Requested</h3>
            <p>0</p>
          </div>
          <div className="card" style={{ backgroundColor: 'lightgreen' }}>
            <h3>Coupon Approved</h3>
            <p>0</p>
          </div>
          <div className="card" style={{ backgroundColor: 'lightblue' }}>
            <h3>Coupon Generated</h3>
            <p>0</p>
          </div>
        </div>

        <div className="cards">
          <div className="card" style={{ backgroundColor: 'lightyellow' }}>
            <h3>Coupon Utilized</h3>
            <p>0</p>
          </div>
          <div className="card" style={{ backgroundColor: 'lightgrey' }}>
            <h3>Coupon InProgress</h3>
            <p>0</p>
          </div>
          <div className="card" style={{ backgroundColor: 'lightpink' }}>
            <h3>Coupon Cancelled</h3>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
