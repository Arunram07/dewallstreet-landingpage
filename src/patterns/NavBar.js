import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../style/patterns/navbar.scss";

import logo from "../assets/icons/logo.svg";
import { ReactComponent as Profile } from "../assets/icons/profile.svg";
import { ReactComponent as Items } from "../assets/icons/items.svg";
import Sidebar from "../components/Sidebar";

const NavBar = ({ title }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const renderNavBar = (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={logo} alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="navbar_items">
        <span className="text_primary_14_W500_v2">{title}</span>
        <span className="mr-20 ml-30 h-24">
          <Profile />
        </span>
        <span
          className="pointer h-24"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Items />
        </span>
      </div>
      <div className="navbar_items1">
        <span className="mr-20 ml-30 h-24">
          <Profile />
        </span>
        <span
          className="pointer h-24"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Items />
        </span>
      </div>
    </div>
  );

  return (
    <>
      {renderNavBar}
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
};

export default NavBar;
