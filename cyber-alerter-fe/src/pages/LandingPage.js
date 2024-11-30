import React from 'react';
import { Link } from 'react-router-dom';
 // Assuming styles for the landing page are here

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our App</h1>
      <p>Click below to sign up and get started</p>
      <Link to="/login">
        <button className="btn-signup">Log in</button>
      </Link>
    </div>
  );
};

export default LandingPage;
