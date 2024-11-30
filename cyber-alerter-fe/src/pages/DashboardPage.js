// src/pages/DashboardPage.js
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Welcome to Your Dashboard</h1>
      <p>This is the main dashboard. Here you can manage your settings, view scans, and more.</p>
      
      <div className="dashboard-actions">
        <button onClick={() => alert('View Scans')}>View Scans</button>
        <button onClick={() => alert('Settings')}>Settings</button>
        <button onClick={() => alert('Logout')}>Logout</button>
      </div>
    </div>
  );
};

export default DashboardPage;
