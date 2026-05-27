import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo" src={LOGO_URL} alt="header-logo" />
        <h3>QuickBite</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                if (btnName === "Login") {
                  setBtnName("Logout");
                } else {
                  setBtnName("Login");
                }
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
