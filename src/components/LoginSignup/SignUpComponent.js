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
        subscriptionPlan:"Free"
      },
      addAuth:false,
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
        <div className="flex flex-col space-y-4" style={{ fontFamily: 'K2D', fontSize: '15px' }}>
  {/* Username Input */}
  <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
    <img src={username ? userBlue : userBlack} alt="Username Icon" className="w-5 h-5 ml-3" />
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Choose a username"
      required
      className="flex-1 pl-3 py-2 pr-4 focus:outline-none rounded-lg"
    />
  </div>

  {/* Email Input */}
  <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
    <img src={email ? emailBlue : emailBlack} alt="Email Icon" className="w-5 h-5 ml-3" />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      required
      className="flex-1 pl-3 py-2 pr-4 focus:outline-none rounded-lg"
    />
  </div>

  {/* Password Input */}
  <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
    <img src={password ? passwordBlue : passwordBlack} alt="Password Icon" className="w-5 h-5 ml-3" />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      required
      className="flex-1 pl-3 py-2 pr-4 focus:outline-none rounded-lg"
    />
  </div>

  {/* Confirm Password Input */}
  <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
    <img src={confirmPassword ? passwordBlue : passwordBlack} alt="Confirm Password Icon" className="w-5 h-5 ml-3" />
    <input
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Confirm your password"
      required
      className="flex-1 pl-3 py-2 pr-4 focus:outline-none rounded-lg"
    />
  </div>
</div>

          {error && (
            <div className="text-sm text-red-500 mt-2">
              {error}
            </div>
          )}
          <button
            type="submit" style={{ fontFamily:'K2D' , fontSize: '15px' }}
            className="w-full text-white font-medium py-2 rounded-lg transition duration-300 hover:bg-[#3348F2] bg-[#0D153C]"
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
