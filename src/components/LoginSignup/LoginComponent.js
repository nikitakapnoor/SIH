import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAPI } from '../../helpers/apiRequests';
import { login } from '../../data/EndPoints';
import emailBlack from '../../images/email-black.svg';
import emailBlue from '../../images/email-blue.svg'; 
import passwordBlack from '../../images/password-black.svg';
import passwordBlue from '../../images/password-blue.svg';
import Eyeo from '../../images/blueeye.svg';
import Eyec from '../../images/blackeye.svg';

const LoginComponent = ({ toggleForm }) => {
  const [email, setEmail] = useState("nik@gmail.com");
  const [password, setPassword] = useState("nik");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, for example API call
    postAPI({
      endpoint: login,
      params: {
        email: email,
        password: password,
      },
      callback: (response) => {
        if (response.status === 200) {
          // Handle success, e.g., display a success message
          console.log(response.data.message);
          navigate('/dashboard');
        } else if (response.status === 401) {
          // Handle incorrect password
         // console.error(response.data.message);
          setError('Password is not correct.');
        } else if (response.status === 404) {
          // Handle incorrect email
         // console.error(response.data.message);
          setError('Email ID is not correct.');
        } else {
          // Handle other errors
       //   console.error(response.data.message);
          setError('Incorrect email or password. Please check.');
        }
      },
    });
  };

  // const emailIcon = email ? emailBlue : emailBlue; 
  // const passwordIcon = password ? passwordBlue:passwordBlack;
  return (
    <div className="flex items-center justify-center min-h-screen font-k2d ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 pb-6" style={{fontFamily:'K2D', fontSize: '32px' }}>Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 mt-8">
          <div className="flex items-center mt-7 border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-black" style={{ fontFamily: 'K2D', fontSize: '15px' }}>
            <img
              src={email ? emailBlue : emailBlack}
              alt="Email Icon"
              className="w-5 h-5 ml-3"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 pl-3 py-2 pr-4 focus:outline-none rounded-xl"
            />
          </div>
          <div
            className="flex items-center mt-5 border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-black"
            style={{ fontFamily: 'K2D', fontSize: '15px' }}
          >
            <img
              src={password ? passwordBlue : passwordBlack}
              alt="Password Icon"
              className="w-5 h-5 ml-3"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="flex-1 pl-3 py-2 pr-4 focus:outline-none rounded-xl"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mr-3"
            >
              {showPassword ? 
                <img src={Eyeo} className="w-5 h-5" alt="Hide password" /> : 
                <img src={Eyec} className="w-5 h-5" alt="Show password" />}
            </button>
          </div>

          {error && (
            <div className="text-sm text-red-500 mt-2" style={{ fontFamily: 'K2D', fontSize: '15px' }}>
              {error}
            </div>
          )}
          <div style={{ left: '24%', bottom: '35%' }}>
            <button
              type="submit"
              className="w-full text-white font-medium py-2 mt-10 rounded-xl transition duration-300 hover:bg-[#3348F2] bg-[#0D153C]"
              style={{ fontSize: '15px' }}
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-3" style={{ fontFamily: 'K2D', fontSize: '15px', fontWeight: 'bold' }}>
          <p className="text-sm text-black">
            New user?{' '}
            <span
              onClick={toggleForm}
              className="text-black cursor-pointer font-medium"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
