import React from "react";
import logo from "../../assets/logo.png";
import Search from "../Search/Search";
import AccountSetting from "../AccountSetting/AccountSetting";
import "./index.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar ">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="title">
          <span>airbnb</span>
        </div>
      </div>
      <Search />
      <AccountSetting/>
    </nav>
  );
};

export default Navbar;
