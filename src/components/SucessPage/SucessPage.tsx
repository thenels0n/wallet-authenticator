import React from "react";
import qrcode from "../../assets/qrcode.png"
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord, BsTwitter, BsGithub } from "react-icons/bs";

const SucessPage = () => {
  return (
    <div className="success-page">
      <div className="img-container">
        <img src={qrcode} alt="" />
      </div>

      <h2>Imported Succefully!</h2>

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

export default SucessPage;
