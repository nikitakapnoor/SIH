// DashboardPage.js
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import PreviewComponent from '../components/DashboardPage';
import HistoryComponent from '../components/History';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div className="flex-1 ml-16 flex flex-col ">
        {/* Header at the top */}
        <Header title="Dashboard" />

        {/* Main Content */}
        <div className="flex-1 mt-10 p-6 overflow-auto">
          {/* Preview Section */}
          <div className="mt-8">
            <PreviewComponent />
          </div>

          {/* History Section */}
          <div className="mt-8">
            <HistoryComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
