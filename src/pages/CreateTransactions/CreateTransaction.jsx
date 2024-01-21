import React, { useState } from 'react';
import styles from '../../pages/CreateTransactions/CreateTransaction.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const CreateTransaction = () => {
  const [amount, setAmount] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = { amount, phonenumber };
    console.log(result, cookies.get('jwt'));

    const request = await fetch(
      //'https://trusfirm.onrender.com/api/v1/transactions',
      'http://localhost:7700/api/v1/transactions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.get('jwt')}`,
        },
        body: JSON.stringify(result),
      }
    );

    const response = await request.json();

    console.log(response);

    if (response.status === 'success') {
      navigate('/');
    }
  };

  return (
    <div className="Home-container">
      <div className="Home-header"></div>
      <div className="Home-nav">
        <div className="Home-nav1">
          <div className="Home-header1">
            <img className="Home-logo" alt="" src="/logo3.svg" />
          </div>
          <div className="Home-nav3">
            <img className="Home-nav3-a" alt="" src="/group-41.svg" />
            <img className="Home-nav3-b" alt="" src="/group-32.svg" />
          </div>
        </div>
        <div>
          <div className="Create-transfer-article">
            <div className="Create-transfer-article1">Create</div>
            <div>
              <div className="Create-transfer-article2">Pament Description</div>
              <input className="Create-transfer-article3" />
            </div>
            <div>
              <div className="Create-transfer-article2">Reciever's Handle</div>
              <input className="Create-transfer-article3" />
            </div>
            <div>
              <div className="Create-transfer-article2">Phone Number</div>
              <input
                className="Create-transfer-article3"
                placeholder="Enter Amount"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">Amount</div>
              <input
                className="Create-transfer-article3"
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button
              className="Create-transfer-article4a"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="Home-header2">
        <div className="Home-header3">
          <img className="dashboard-icon" alt="" src="/home-21.svg" />
          <div className="dashboard-icon-name">Dashboard</div>
        </div>
        <div className="Home-header3">
          <img className="dashboard-icon" alt="" src="/transfer-12.svg" />
          <div className="dashboard-icon-name">Transaction</div>
        </div>
        <div className="Home-header3">
          <img className="dashboard-icon" alt="" src="/service-13.svg" />
          <div className="dashboard-icon-name">Services</div>
        </div>
        <div className="Home-header3">
          <img className="dashboard-icon" alt="" src="/settings-solid-1.svg" />
          <div className="dashboard-icon-name">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
