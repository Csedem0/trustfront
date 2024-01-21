import React, { useEffect, useState } from 'react';
import styles from '../../pages/CurrentTransactions/CurrentTransactions.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const CurrentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      //   fetch('http://localhost:7700/api/transactions')
      //     .then((response) => response.json())
      //     .then((json) => {
      //       setTransactions(json);
      //     });
      try {
        const request = await fetch(
          'http://localhost:7700/api/transactions/me',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );

        const response = await request.json();

        console.log(response);

        if (response.status === 'failed') {
          alert(response.message);
        }
        const data = response.data.transactions;
        setTransactions(data);
        console.log(transactions);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTransactions();
  }, []);

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
          <div className="Current-transfer-article">
            {transactions.map((transaction) => (
              <div className="Current-transfer-article1" key={transaction.id}>
                <div className="" />
                <img
                  className="Current-transfer-article1-img"
                  alt=""
                  src="/group-385.svg"
                />
                <div className="">
                  <div className="Current-transfer-article2">
                    {transaction.referralId}
                  </div>
                </div>
                <div className="">
                  <div className="Current-transfer-article2">
                    {transaction.amount}
                  </div>
                </div>
                <div className="">
                  <div className="Current-transfer-article2">
                    {transaction.createdAt}
                  </div>
                </div>
                <div className="">
                  <div className="Current-transfer-article4">Confirm</div>
                </div>
              </div>
            ))}
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
            <img
              className="dashboard-icon"
              alt=""
              src="/settings-solid-1.svg"
            />
            <div className="dashboard-icon-name">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTransactions;
