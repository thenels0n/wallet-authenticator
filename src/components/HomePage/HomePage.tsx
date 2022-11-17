import React, { useState } from 'react'
import Wallet from '../Wallet/Wallet';
import WALLET from "../../assets/wallet.png";
import { HiArrowDown } from "react-icons/hi";
import { wallets } from "../../utils";
import PageLayout from '../PageLayout/PageLayout';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageLayout>
      <div className="hero">
        <h3>WalletConnect</h3>
        <h5>Open protocol for connecting Wallets to Dapps</h5>
        <div className="img-container">
          <img src={WALLET} alt="" />
        </div>
      </div>

      <div className="about-item">
        <h5>What is WalletConnect?</h5>
        <p>
          WalletConnect is an open source protocol for connecting decentralised
          applications to mobile wallets with QR code scanning or deep linking.
          A user can interact securely with any Dapp from their mobile phone,
          making WalletConnect wallets a safer choice compared to desktop or
          browser extension wallets.
        </p>
        <h5>How does it work?</h5>
        <p>
          WalletConnect connects web applications to supported mobile wallets.
          WalletConnect session is started by a scanning a QR code (desktop) or
          by clicking an application deep link (mobile).
        </p>
      </div>

      <div className="wallets">
        <h4>Wallets</h4>
        <p>
          Multiple iOS and Android wallets support the WalletConnect protocol.
          Interaction between mobile apps and mobile browsers are supported via
          mobile deep linking.
        </p>

        <div className="wallet-frame-list">
          {wallets.map(
            (obj: any) => obj.id < 16 && <Wallet key={obj.id} obj={obj} />
          )}
        </div>

        <button  onClick={() => setIsOpen(!isOpen)}>
          Show More <HiArrowDown />{" "}
        </button>

        {isOpen && (
          <div className="wallet-frame-list">
            {wallets.map(
              (obj: any) => obj.id > 15 && <Wallet key={obj.id} obj={obj} />
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default HomePage