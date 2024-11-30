import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAPI } from '../../helpers/apiRequests';
import { login } from '../../data/EndPoints';


const LoginComponent = ({ toggleForm }) => {
  const [email, setEmail] = useState("testuserApek@example.com");
  const [password, setPassword] = useState("ApekCh");
  const [error,setError]=useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, for example API call
    postAPI({
      endpoint: login,
      params: {
        "email": email,
        "password": password
      },
      callback: (response) => {
        if (response.status === 200) {
          // Handle success, e.g., display a success message
          console.log(response.data.message);
          navigate('/dashboard'); 
        } else {
          // Handle error response
          console.error(response.data.message);
          setError(true)
        }
      },
    });
    // If login is successful // Redirect to dashboard
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div>Incorrect email or password please check</div>}
        <button type="submit" className="btn-login">Login</button>
      </form>
      <div className="signup-link">
        <p>New user? <span onClick={toggleForm} className="link">Sign Up</span></p>
      </div>
    </div>
  );
};

export default LoginComponent;
