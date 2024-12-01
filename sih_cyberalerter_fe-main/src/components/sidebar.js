import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for route checking
import Dashboard from '../images/dashboard.svg';
import Scanner from '../images/iscanner.svg';
import Report from '../images/report.svg';
import user from '../images/user-blue.svg';
import logo from '../images/logo.svg';
const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation(); // Get the current location (URL)

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isHovered ? 'w-40' : 'w-16'
      } bg-gray-900 text-white z-50 transition-all duration-300 shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between h-full pt-6">
        {/* Logo at the top */}
        <div className="text-3xl px-4 font-bold tracking-wider"><img src={logo} alt="Dashboard Icon" className="w-7 h-7"/> </div>

        {/* Navigation links */}
        <div className="flex flex-col space-y-8 mt-20">
          <Link
            to="/dashboard"
            className={`text-md py-2 px-3 rounded mx-2 w-auto ${
              isActive('/dashboard') && !isHovered ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
            } transition duration-300 flex items-center`}
          >
            <img src={Dashboard} alt="Dashboard Icon" className="w-6 h-6"/>
            {isHovered && <span className="ml-2">Dashboard</span>}
          </Link> 
          <Link
            to="/scan"
            className={`text-md py-2 px-3 rounded mx-2 w-auto ${
              isActive('/scan') && !isHovered ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
            } transition duration-300 flex items-center`}
          >
             <img src={Scanner} alt="Scanner Icon" className="w-6 h-6"/>
             {isHovered &&<span className="ml-2">Scanner</span>}
          </Link>
          <Link
            to="/reports"
            className={`text-md py-2 px-3 rounded mx-2 w-auto ${
              isActive('/reports') ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
            } transition duration-300 flex items-center`}
          >
            <img src={Report} alt="report Icon" className="w-6 h-6"/>
            {isHovered && <span className="ml-2">Reports</span>}
          </Link>
        </div>
        {/* User at the bottom */}
        <Link
          to="/user"
          className={`text-lg py-2 px-3 mx-2 rounded w-auto mt-auto ${
            isActive('/user') ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
          } transition duration-300 flex items-center`}
        >
  <img src={user} alt="Scanner Icon" className="w-6 h-6" />
          {isHovered && <span className="ml-2">Profile</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
