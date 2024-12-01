import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAPI } from '../../helpers/apiRequests';
import { signUp } from '../../data/EndPoints';
import emailBlue from '../../images/email-blue.svg'; 
import emailBlack from '../../images/email-black.svg'; 
import userBlue from '../../images/user-blue.svg'; 
import userBlack from '../../images/user-black.svg'; 
import passwordBlack from '../../images/password-black.svg';
 import passwordBlue from '../../images/password-blue.svg';

const SignUpComponent = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    // Perform signup logic here, for example API call
    postAPI({
      endpoint: signUp,
      params: {
        username: username,
        email: email,
        password: password,
      },
      callback: (response) => {
        if (response.status === 201) {
          // Handle success
          console.log(response.data.message);
          alert('Sign-up successful! Redirecting to login.');
          toggleForm(); // Switch to login form
          navigate('/login'); // Navigate back to login page
        } else {
          // Handle error response
          console.error(response.data.message);
          setError('User already exists! Please login.');
        }
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6" style={{ fontFamily:'K2D' , fontSize: '32px' }}>Create an Account</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="flex flex-col">
          <img src={username ? userBlue : userBlack} alt="Password Icon" className="absolute transform -translate-y-1/2 w-5 h-5"
             style={{ left: '26%', top: '35%' }} />
            <input
            style={{ fontFamily:'K2D' , fontSize: '15px' }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
              className="pl-10 py-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black "
            />
          </div>
          <div className="flex flex-col">
          <img src={email? emailBlue:emailBlack} alt="Password Icon" className="absolute  transform -translate-y-1/2 w-5 h-5"
             style={{ left: '26%', top: '43%' }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ fontFamily:'K2D' , fontSize: '15px' }}
              className="pl-10 py-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black "
            />
          </div>
          <div className="flex flex-col">
          <img src={password ? passwordBlue : passwordBlack} alt="Password Icon" className="absolute transform -translate-y-1/2 w-5 h-5"
          style={{ left: '26%', bottom: '45%' }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{ fontFamily:'K2D' , fontSize: '15px' }}
              className="pl-10 py-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black "
            />
          </div>
          <div className="flex flex-col">
          <img src={confirmPassword ? passwordBlue : passwordBlack} alt="Password Icon" className="absolute transform -translate-y-1/2 w-5 h-5" 
          style={{ left: '26%', bottom: '37%' }} />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              style={{ fontFamily:'K2D' , fontSize: '15px' }}
              className="pl-10 py-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black "
            />
          </div>
          {error && (
            <div className="text-sm text-red-500 mt-2">
              {error}
            </div>
          )}
          <button
            type="submit" style={{ backgroundColor: '#0D153C', fontFamily:'K2D' , fontSize: '15px' }}
            className="w-full text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600" style={{ fontFamily:'K2D' , fontSize: '15px',fontWeight:'bold' }}>
            Already have an account?{' '}
            <span
              onClick={toggleForm}
              className="text-black cursor-pointer font-medium" style={{ fontFamily:'K2D' , fontSize: '15px' }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
