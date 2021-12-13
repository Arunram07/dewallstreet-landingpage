import React from "react";
import { Link } from "react-router-dom";

import "../style/patterns/footer.scss";

import { ReactComponent as Facebook } from "../assets/icons/fbB.svg";
import { ReactComponent as Slack } from "../assets/icons/slackB.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedinB.svg";
import { ReactComponent as Discord } from "../assets/icons/discordB.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitterB.svg";
// import chainPassthrough from "../assets/icons/chainPassthrough.svg";
import chainPassthrough from "../assets/icons/networkiconLite.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text_dark_14">
        <p className="mb-30">
          Copyright | 2021 DeWall Street Corporation. All rights reserved. DeWall Street Corporation
          has registered trademarks and uses trademarks. For a list of trademarks of DeWall Street
          Corporation, please see our Trademark Usage page. DeWall Street is a registered trademark
          of ZEVO Corporation.
        </p>
        <div className="personal_links mb-30">
          <Link to="/terms_of_use">Terms of Use </Link>
          <Link to="/privacy_policy">Privacy Policy </Link>
          <Link to="/bylaws">Bylaws </Link>
          <Link to="/antitrust_policy">Antitrust Policy </Link>
          <Link to="/good_standing_policy">Good Standing Policy</Link>
        </div>
        <div className="footer_social">
          <span className="text_primary_12" style={{ color: "#495358" }}>
            Follow Us:
          </span>
          <a href="/" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <Discord />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <Slack />
          </a>
        </div>
      </div>
      <div>
        <img src={chainPassthrough} alt="chain" />
      </div>
    </div>
  );
};

export default Footer;
