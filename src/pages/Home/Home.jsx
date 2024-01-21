import React from 'react';
import styles from '../../pages/Home/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home-container">
      <div className="Home-header"></div>
      <div className="Home-nav">
        <div className="Home-nav1">
          <div className="Home-header1">
            <img className="Home-logo" alt="" src="/logo3.svg" />
          </div>
          <div className="Home-nav3">
            <img className="Home-nav3-b" alt="" src="/group-32.svg" />
          </div>
        </div>
        <div className="Home-section">
          <div className="Home-section-1">
            <div className="Home-section-2">
              <img className="Home-section-3" alt="" src="/group-400.svg" />
              <div className="Home-section-4">
                <div className="Home-section-6">Pending</div>
                <div className="Home-section-5">$0.00</div>
              </div>
            </div>
            <div className="Home-section-2">
              <img className="Home-section-3" alt="" src="/group-494.svg" />
              <div className="Home-section-4">
                <div className="Home-section-6">Pending</div>
                <div className="Home-section-5">$0.00</div>
              </div>
            </div>
            <div className="Home-section-2">
              <img className="Home-section-3" alt="" src="/group-402.svg" />
              <div className="Home-section-4">
                <div className="Home-section-6">Pending</div>
                <div className="Home-section-5">$0.00</div>
              </div>
            </div>
            <div className="Home-section-2">
              <img className="Home-section-3" alt="" src="/group-401.svg" />
              <div className="Home-section-4">
                <div className="Home-section-6">Pending</div>
                <div className="Home-section-5">$0.00</div>
              </div>
            </div>
          </div>

          <div className="Home-footer">
            <Link to="/create-transaction" className="Home-footer-button">
              Create Transaction
            </Link>
            <Link to="/make-transaction" className="Home-footer-button">
              Make Transfer
            </Link>
          </div>

          <div className="Home-article">
            <div className="Home-article1">
              <div className="Home-article2">Uncompleted Transfers</div>
              <div className="Home-article3">
                <div className="Home-article3-1">
                  <div className="Home-article3-2" />

                  <div className="">
                    <div className="">Emilly Wilson</div>
                  </div>
                  <div className="">25 Jan 2021</div>
                  <div className="">Transfer</div>
                  <div className="">+$780</div>
                  <div className=""></div>
                </div>
                <div className="Home-article3-1">
                  <div className="Home-article3-2" />

                  <div className="">
                    <div className="">Emilly Wilson</div>
                  </div>
                  <div className="">25 Jan 2021</div>
                  <div className="">Transfer</div>
                  <div className="">+$780</div>
                  <div className=""></div>
                </div>
                <div className="Home-article3-1">
                  <div className="Home-article3-2" />

                  <div className="">
                    <div className="">Emilly Wilson</div>
                  </div>
                  <div className="">26 jan 2012</div>
                  <div className="">Transfer</div>
                  <div className="">+$780</div>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="Home-article4">
              <div className="Home-article5">
                <div className="Home-article6">Recent Transfers</div>
              </div>
              <div className="Home-article1">
                <div className="Home-article3">
                  <div className="Home-article3-1">
                    <div className="Home-article3-2" />

                    <div className="">
                      <div className="">Emilly Wilson</div>
                    </div>
                    <div className="">+$780</div>
                    <div className=""></div>
                  </div>
                  <div className="Home-article3-1">
                    <div className="Home-article3-2" />

                    <div className="">
                      <div className="">Emilly Wilson</div>
                    </div>

                    <div className="">+$780</div>
                    <div className=""></div>
                  </div>
                  <div className="Home-article3-1">
                    <div className="Home-article3-2" />

                    <div className="">
                      <div className="">Emilly Wilson</div>
                    </div>
                    <div className="">+$780</div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
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

export default Home;
