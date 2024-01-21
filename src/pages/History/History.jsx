import React from 'react';

const History = () => {
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
          <div className="Current-transfer-article">
            <div className="Current-transfer-article1">
              <div className="" />
              <img
                className="Current-transfer-article1-img"
                alt=""
                src="/group-385.svg"
              />
              <div className="">
                <div className="Current-transfer-article2">Junior Chukwu</div>
              </div>
              <div className="">
                <div className="Current-transfer-article2">$500.00</div>
              </div>
              <div className="">
                <div className="Current-transfer-article2">12-12-2008</div>
              </div>
            </div>
            <div className="Current-transfer-article1">
              <div className="" />
              <img
                className="Current-transfer-article1-img"
                alt=""
                src="/group-385.svg"
              />
              <div className="">
                <div className="Current-transfer-article2">Junior Chukwu</div>
              </div>
              <div className="">
                <div className="Current-transfer-article2">$500.00</div>
              </div>
              <div className="">
                <div className="Current-transfer-article2">12-12-2008</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
