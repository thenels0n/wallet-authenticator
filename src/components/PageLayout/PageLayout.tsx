import React from "react";
import LOGO from "../../assets/logo.svg";
import { BsDiscord, BsTwitter, BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageLayout = ({ children }: any) => {
  return (
    <div className="page">
      <div className="header">
        <div className="nav-list">
          <ul>
            <Link to="#" style={{ textDecoration: "none" }}>
              <li>Github</li>
            </Link>
            <Link to="#" style={{ textDecoration: "none" }}>
              <li>Docs</li>
            </Link>
            <li>
              <img src={LOGO} alt="" />
            </li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Wallets</li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Apps</li>
            </Link>
          </ul>
        </div>
      </div>
      {children}
      <div className="footer">
        <Link to="#" style={{ textDecoration: "none" }}>
          <div className="footer-item">
            <BsDiscord className="icon" />
            <p>Discord</p>
          </div>
        </Link>
        <Link to="/#" style={{ textDecoration: "none" }}>
          <div className="footer-item">
            <FaTelegramPlane className="icon" />
            <p>Telegram</p>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="footer-item">
            <BsTwitter className="icon" />
            <p>Twitter</p>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="footer-item">
            <BsGithub className="icon" />
            <p>Github</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageLayout;
