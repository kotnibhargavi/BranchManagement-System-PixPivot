import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'barath' && password === '12345') {
      localStorage.setItem('isAuthenticated', 'true');
      if (rememberMe) {
        localStorage.setItem('username', username);
      }
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://digitrac.sundharams.com/images/logos/digitrac_full_logo.png"
            alt="Logo"
            style={{ width: '150px', marginBottom: '10px' }}
          />
          <h2>Login</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="options" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ marginRight: '5px' }}
            />
            Remember Me
          </label>
          <p
            className="forgot-password"
            onClick={() => navigate('/forgotpassword')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            Forgot Password?
          </p>
        </div>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
