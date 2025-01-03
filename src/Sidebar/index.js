import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom'; 
// import Branch from '../Master/branch.js';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMasterDropdown = () => {
    setIsMasterDropdownOpen(!isMasterDropdownOpen);
  };


  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      {/* Sidebar Header with Toggle Button */}
      <div className="sidebar-header">
        <img
          src="https://digitrac.sundharams.com/images/logos/digitrac_full_logo.png"
          alt="Logo"
          className="sidebar-logo"
        />
        <button className="sidebar-toggle" onClick={handleToggleSidebar}>
          {isSidebarOpen ? '←' : '→'}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-links">
        <li className="sidebar-item">
          <i className="icon">🏠</i> {isSidebarOpen && "Home"}
        </li>
        <li className="sidebar-item">
  <div className="master-dropdown">
    <div className="master-toggle" onClick={toggleMasterDropdown}>
      <i className="icon">🔧</i> {isSidebarOpen && "Master"}
      {isSidebarOpen && (
        <span className="dropdown-arrow">
          {isMasterDropdownOpen ? "▲" : "▼"}
        </span>
      )}
    </div>
    {isMasterDropdownOpen && isSidebarOpen && (
      <ul className="dropdown-links">
        <li className="dropdown-item">
          <Link to="/Master/branch" style={{ textDecoration: "none", color: "inherit" }}>
            Branch
          </Link>
        </li>
      </ul>
    )}
  </div>
</li>

        
        <li className="sidebar-item">
          <i className="icon">❓</i> {isSidebarOpen && "Help"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
