import React from "react";
import LOGO from "../../assets/logo.svg";
import { BsDiscord, BsTwitter, BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const PageLayout = ({ children }: any) => {
  return (
    <div className="page">
      <div className="header">
        <div className="nav-list">
          <ul>
            <li>Github</li>
            <li>Docs</li>
            <li>
              <img src={LOGO} alt="" />
            </li>
            <li>Wallets</li>
            <li>Apps</li>
          </ul>
        </div>
      </div>
      {children}
      <div className="footer">
        <div className="footer-item">
          <BsDiscord className="icon" />
          <p>Discord</p>
        </div>
        <div className="footer-item">
          <FaTelegramPlane className="icon" />
          <p>Telegram</p>
        </div>
        <div className="footer-item">
          <BsTwitter className="icon" />
          <p>Twitter</p>
        </div>
        <div className="footer-item">
          <BsGithub className="icon" />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
