// src/pages/Registration.jsx
import React, { useState } from 'react';
import '../styles/registration.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    // Store credentials in local storage (for demonstration purposes)
    localStorage.setItem(username, password);
    console.log('User registered:', { username, password });
    alert("Registration successful! You can now log in.");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Register</button>
        <div className="login-link">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
