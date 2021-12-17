import React from "react";
import "../style/patterns/carousel.scss";
import "../style/patterns/navbar.scss";
import "../style/patterns/menu.scss";

import { ReactComponent as Facebook } from "../assets/icons/fb.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Discord } from "../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as File } from "../assets/icons/bx-file.svg";
import { ReactComponent as Telegram } from "../assets/icons/telegram.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";

import { ReactComponent as ArrowRight } from "../assets/icons/arrowRight.svg";

import scroll from "../assets/icons/scroll.svg";

import Button from "../components/Button";
import NavBar from "./NavBar";

const Carousel = () => {
  const renderhero = (
    <div className="hero">
      <div>
        <p className=" hero_heading mb-20 text_primary_14_W500">
          <span>DESIGN</span> <span>BUILD</span> <span>DECENTRALIZE</span>
        </p>
        <p className="mb-20  text_primary_30">
          We are <span className="primeGrad">Open Source</span>, Decentralized Innovation product
          builders that are built on trust.
        </p>
        <p className="mb-30 text_secondaryLite_14">
          We are an art-driven community aspiring to create the finest business solutions. How ?
          Through decentralized technologies and frameworks. It doesn't end there. We provide the
          necessary architecture and design experience to cater to your needs. DeWall Street
          Corporation understands how important it is to give back. Thus, social responsibility and
          professionalism are our driving forces.{" "}
        </p>
        <div className="hero_link">
          <p className="mr-20  pointer" style={{ display: "flex", alignItems: "center" }}>
            <File />
            <span className="text_primary_14_W500_v2 ml-10">Read inception paper</span>
          </p>

          <Button
            variant="primary"
            children="Lets talk"
            type="submit"
            imgLeft={<ArrowRight />}
          ></Button>
        </div>
      </div>
    </div>
  );

  const renderFoot = (
    <div className="heroFoot">
      <div className="heroFoot_social">
        <span className="text_primary_12">Follow US :</span>
        <a href="/" target="_blank" rel="noreferrer">
          <Facebook />
        </a>
        <a href="https://in.linkedin.com/company/dewallstreet" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <Discord />
        </a>
        <a href="https://www.instagram.com/dewallstreet.media/" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        {/* <a href="/" target="_blank" rel="noreferrer">
          <Slack />
        </a> */}
        <a href="https://t.me/dewallstreet_pin" target="_blank" rel="noreferrer">
          <Telegram />
        </a>
      </div>
      <div className="heroFoot_scroll">
        <a href="#who">
          <img src={scroll} alt="scroll" />
        </a>
        <p className="text_primary_14_W500_v2">Scroll Down</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="heroSection">
        <NavBar title="Home" />
        {renderhero}
        {renderFoot}
      </div>
    </>
  );
};

export default Carousel;
