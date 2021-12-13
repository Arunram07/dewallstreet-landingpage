import React, { useEffect, useState } from "react";

//STYLESHEET

import "../style/components/sidebar.scss";

import navLinks from "../data/navLinks.json";

//IMPORTING MEDIA ASSETS

import { ReactComponent as Close } from "../assets/icons/close.svg";
import chainPassthrough from "../assets/icons/chainPassthrough.svg";
import { Link, NavLink } from "react-router-dom";

const SubMenuLinks = ({ name, to, subLinks, toggleMenu }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (!toggleMenu) setIsActive(false);
  }, [toggleMenu]);
  return (
    <>
      <div
        className="link"
        // onMouseEnter={() => setIsActive(true)}
        // onMouseLeave={() => setIsActive(false)}
        onClick={() => setIsActive(!isActive)}
      >
        <NavLink exact to={to} activeClassName="link_active">
          {name}
        </NavLink>
        <div className={isActive ? "sub_link active" : "sub_link inactive"}>
          <div className="sub_link_content">
            {subLinks.map((sublink, i) => (
              <Link key={i} to={sublink.to}>
                {sublink.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Sidebar = ({ toggleMenu, setToggleMenu }) => {
  const renderClose = (
    <div className="sidebar_menu">
      <span className="pointer" onClick={() => setToggleMenu(false)}>
        <Close />
      </span>
    </div>
  );

  const renderSidebarLinks = (
    <div className="sidebar_links">
      {navLinks.map((data, i) => {
        if (data?.["subLinks"]) {
          return <SubMenuLinks key={i} {...data} toggleMenu={toggleMenu} />;
        } else {
          return (
            <div key={i} className="link">
              <NavLink to={data.to} exact activeClassName="link_active">
                {data.name}
              </NavLink>
            </div>
          );
        }
      })}
    </div>
  );

  return (
    <>
      <div className={toggleMenu ? "sidebar active" : "sidebar inactive"}>
        {renderClose}
        {renderSidebarLinks}
        <div className="sidebar_abstract">
          <img src={chainPassthrough} alt="abstract" />
        </div>
      </div>
      <div
        className={toggleMenu ? "sidebar_backdrop active" : "sidebar_backdrop "}
        onClick={() => setToggleMenu(false)}
      >
        {" "}
      </div>
    </>
  );
};

export default Sidebar;
