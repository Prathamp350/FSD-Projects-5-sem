import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === 'Pratham350' && password === 'Pratham@123') {
      console.log('Login successful!');
      // Navigate to Countries page on successful login
      navigate('/countries');
    } else {
      console.log('Invalid credentials');
      // You can display an error message here if needed
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forget">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">Log in</button>
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
      
        </div>
      </form>
    </div>
  );
};

export default Login;
