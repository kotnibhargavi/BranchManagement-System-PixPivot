import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';
import './index.css'; 
import { useEffect } from 'react';


const Home = () => {
  const navigate = useNavigate();

  // In Home.js
  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/login');
    }
  }, [navigate]);
  
  

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <Sidebar />
      <Dashboard />
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;