import React, { useState } from 'react';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = { name, email, password };
    console.log(result);
    const response = await fetch(
      'https://trusfirm.onrender.com/api/v1/sign-up',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
      }
    ).catch((error) => {
      console.log(error);
    });

    console.log(response);

    if (response?.status === 201) {
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <img className="Home-logo" alt="" src="/logo3.svg" />
      <form className="trustfirm-form">
        <div className="trustfirm-name">Create an Account</div>
        {error && <Error>{error}</Error>}
        <section className="trustfirm-section">
          <div className="trustfirm-register">
            <div>FullName</div>
            <input
              className="inputt"
              name="name"
              placeholder="Enter fullname"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="trustfirm-register">
            <div>Confirm Password</div>
            <input
              className="inputt"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>
        <button className="register" onClick={handleSubmit}>
          Register
        </button>
        <div>
          <div>Already have an account?</div>
          <Link className="login" to="/login">
            {' '}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
