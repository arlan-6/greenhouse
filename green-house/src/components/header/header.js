import React from "react";
import "./header.css";
import Logo from "../img/photo_2022-06-28_23-12-46.jpg";

const Header = () => {
  return (
    <div className="head">
      <div className="nav">
        <div className="navigation">
          <div className="adress">📌mekenjaıy: asdfg5 56</div>
        </div>
        <div className="navigation">
          <h1>Greenhouse</h1>
        </div>
        <div className="navigation">
          <div className="login">
            <img src={Logo} alt="" />

            <h2 className="login-kiru">Kiry</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
