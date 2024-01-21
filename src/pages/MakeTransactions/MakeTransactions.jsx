import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const MakeTransactions = () => {
  const [referralId, setTransfer] = useState('');
  const [recieverAcct, setAccount] = useState('');
  const [mail, setMail] = useState('');
  const [currency, setCurrency] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [bank, setBank] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = {
      referralId,
      recieverAcct,
      mail,
      currency,
      lastname,
      firstname,
      bank,
    };
    console.log(result, cookies.get('jwt'));

    const request = await fetch(
      'http://localhost:7700/api/v1/transactions/join',
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
      <div className="Home-header">
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
            <img
              className="dashboard-icon"
              alt=""
              src="/settings-solid-1.svg"
            />
            <div className="dashboard-icon-name">Settings</div>
          </div>
        </div>
      </div>
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
            <div>
              <div className="Create-transfer-article2">Transfer ID</div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setTransfer(e.target.value)}
                value={referralId}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">
                Reciever's Bank Account
              </div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setBank(e.target.value)}
                value={bank}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">
                Reciever's Account Number
              </div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setAccount(e.target.value)}
                value={recieverAcct}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">First Name</div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">Last Name</div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">Email</div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
              />
            </div>
            <div>
              <div className="Create-transfer-article2">Currency</div>
              <input
                className="Create-transfer-article3"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
              />
            </div>
            <div className="Create-transfer-article4a" onClick={handleSubmit}>
              Advance to pament
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeTransactions;
