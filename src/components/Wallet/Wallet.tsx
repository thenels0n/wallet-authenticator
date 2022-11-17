import React from "react";
import { Link } from "react-router-dom";

const Wallet = ({ obj }: any) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/${obj.name}`}
    >
      <div className="service-card">
        <img src={obj.img} alt="" />
        <p>{obj.name}</p>
      </div>
    </Link>
  );
};

export default Wallet;
