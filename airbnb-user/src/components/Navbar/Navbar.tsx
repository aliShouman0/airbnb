import React from "react";
import logo from "../../assests/logo.png";
import "./index.css";

function Navbar() {
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="title">
          <span>airbnb</span>
        </div>
      </div>
      <div className="search"></div>
    </nav>
  );
}

export default Navbar;
