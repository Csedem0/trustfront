import React, { useEffect, useState } from 'react';
import styles from '../../pages/Profile/Profile.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Profile = () => {
  const [profile, setProfile] = useState([]);

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
        const data = response.data.user;
        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <div className="Home-container">
      <div className="Home-header">
        <div className="Home-header1">
          <img className="Home-logo" alt="" src="/logo3.svg" />
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
      <div className="Home-nav">
        <div className="Home-nav1">
          <div className="Home-nav2">Profile</div>
          <div className="Home-nav3">
            <img className="Home-nav3-a" alt="" src="/group-41.svg" />
            <img className="Home-nav3-b" alt="" src="/group-32.svg" />
            <img className="Home-nav3-c" alt="" src="/ellipse-11@2x.png" />
          </div>
        </div>
        <div className="Home-sec">
          <img className="Home-sec1" alt="" src="/group-206.svg" />
          <div className="Home-sec2">
            <div className="Home-sec3">
              <div className="Home-sec3-1">Name</div>
              <div className="Home-sec3-2">{profile.name}</div>
            </div>
            <div className="Home-sec3">
              <div className="Home-sec3-1">Username</div>
              <div className="Home-sec3-2">@emmanuel</div>
            </div>
            <div className="Home-sec3">
              <div className="Home-sec3-1">Email</div>
              <div className="Home-sec3-2">{profile.email}</div>
            </div>
            <div className="Home-sec3">
              <div className="Home-sec3-1">Phone Number</div>
              <div className="Home-sec3-2">091 *** ****</div>
            </div>
            <div className="Home-sec3">
              <div className="Home-sec3-1">City</div>
              <div className="Home-sec3-2">Port Harcourt</div>
            </div>
            <div className="Home-sec3">
              <div className="Home-sec3-1">Country</div>
              <div className="Home-sec3-2">Nigeria</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
