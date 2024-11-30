import React, { useState } from 'react';
import LoginComponent from '../components/LoginSignup/LoginComponent';
import SignUpComponent from '../components/LoginSignup/SignUpComponent';
import { Link } from 'react-router-dom';

// import '../styles/login.css'

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-page">
      <div className="return-btn">
        <Link to="/">
          <button className="btn-return">Return</button>
        </Link>
      </div>
      <div className="login-card">
        {isSignUp ? (
          <SignUpComponent toggleForm={toggleForm} />
        ) : (
          <LoginComponent toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
