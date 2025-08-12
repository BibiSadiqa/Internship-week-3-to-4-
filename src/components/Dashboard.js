// src/AdopterDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboardd.css';
import Simpleheader from './Simpleheader'; // Optional styling file

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
    <Simpleheader />

    <div className="dashboard-container">
      
      <h1>DASHBOARD</h1>
      <div className="button-container">
      <button onClick={() => navigate('/pets')}>Lists of Pets</button>
      <button onClick={() => navigate('/view-requests')}>Make Request</button>
      <button onClick={() => navigate('/')}>Logout</button>
      </div>
      
    </div>
    </>
    
  );
};

export default Dashboard;
