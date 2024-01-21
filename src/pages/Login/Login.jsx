import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = { email, password };
    console.log(result);
    const request = await fetch('http://localhost:7700/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    });

    const response = await request.json();
    cookies.set('jwt', response.token, {
      path: '/',
      expires: new Date(new Date().getTime() + 24 * 3600 * 1000),
    });

    if (response.status === 'success') {
      navigate('/');
    }
  };

  return (
    <div className="container">
      <img className="Home-logo" alt="" src="/logo3.svg" />
      <form className="trustfirm-form">
        <div className="trustfirm-name">Login Account</div>
        <section className="trustfirm-section">
          <div className="trustfirm-register">
            <div>Your Email</div>
            <input
              className="inputt"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="trustfirm-register">
            <div>Password</div>
            <input
              className="inputt"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>
        <button className="register" onClick={handleSubmit}>
          Login
        </button>
        <div>
          <div>Don't have an account?</div>
          <Link className="login" to="/register">
            {' '}
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
