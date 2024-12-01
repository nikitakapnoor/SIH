import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAPI } from '../../helpers/apiRequests';
import { login } from '../../data/EndPoints';
import emailBlack from '../../images/email-black.svg';
import emailBlue from '../../images/email-blue.svg'; 
import passwordBlack from '../../images/password-black.svg';
 import passwordBlue from '../../images/password-blue.svg';

const LoginComponent = ({ toggleForm }) => {
  const [email, setEmail] = useState("testuserApek@example.com");
  const [password, setPassword] = useState("ApekCh");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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
        } else {
          // Handle error response
          console.error(response.data.message);
          setError(true);
        }
      },
    });
  };

  // const emailIcon = email ? emailBlue : emailBlue; 
  // const passwordIcon = password ? passwordBlue:passwordBlack;
  return (
    <div className="flex items-center justify-center min-h-screen font-k2d">
      <div className="bg-white shadow-lg rounded-lg p-5 w-full h-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 mt-4" style={{fontFamily:'K2D', fontSize: '32px' }}>Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 mt-8">
          <div className="flex flex-col" style={{ fontFamily:'K2D' , fontSize: '15px' }}>
          <img src={email?emailBlue:emailBlack} alt="Password Icon" className="absolute  transform -translate-y-1/2 w-5 h-5" 
            style={{ left: '24%', top: '42%' }}  />
            {/* <img src={emailIcon} alt="Email Icon" className="absolute left-3 top-3 w-5 h-5" />  */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="pl-10 py-2 pr-4 border mt-5 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black "
            />
          </div>
          <div className="flex flex-col" style={{ fontFamily:'K2D' , fontSize: '15px' }}>
          <img src={password ? passwordBlue : passwordBlack} alt="Password Icon" className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          style={{ left: '24%', bottom: '35%' }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="py-2 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black "
            />
          </div>
          {error && (
            <div className="text-sm text-red-500 mt-2" style={{ fontFamily:'K2D' , fontSize: '15px' }}>
              Incorrect email or password. Please check.
            </div>
          )}
<div   style={{ left: '24%', bottom: '35%' }} >
          <button
            type="submit"
            className="w-full text-white font-medium py-2 mt-8 rounded-xl transition duration-300"
            style={{backgroundColor: '#0D153C', fontSize: '15px' }}
          >
            Login
          </button>
        </div>
        </form>
        <div className="text-center mt-3" style={{ fontFamily:'K2D' , fontSize: '15px',fontWeight:'bold' }}>
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
