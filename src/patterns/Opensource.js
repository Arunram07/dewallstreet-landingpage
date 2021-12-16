import React from "react";

import "../style/patterns/opensource.scss";

import OpensourceCard from "../cards/OpensourceCard";
import Button from "../components/Button";

import { decentralized, blockchain } from "../data/openSource";

const Opensource = ({ variant }) => {
  const renderOpensourceAbout = (
    <div className="opensource_about">
      <p className="mb-20 text_dark_24">
        The world of decentralized web runs on <span className="primeGrad">open source</span>
      </p>
      <p className="text_secondaryDark_14">
        The DeWall Street Corporation enables companies to drive global innovation by growing open
        technology ecosystems that transform industries.
      </p>
    </div>
  );

  const renderBlockchainAbout = (
    <div className="ecosystem_about">
      <p className="mb-20 text_dark_24">
        Our core <span className="primeGrad">Blockchain Development</span> solutions and services
      </p>
      <p className="text_secondaryDark_14">
        Our Blockchain Development Services focus on improving the Blockchain use case to its
        participants. The Services serve different spheres of influence through its widespread
        usability and utility contributing in multiple domains.
      </p>
    </div>
  );

  const renderOpensourceCards = (
    <div className="opensource_cards">
      {decentralized.map((data, i) => (
        <OpensourceCard key={i} percent={data.percent} data={data.data} />
      ))}
    </div>
  );

  const renderBlockchainCards = (
    <div className="opensource_cards">
      {blockchain.map((data, i) => (
        <OpensourceCard key={i} percent={data.percent} data={data.data} image={data.image} />
      ))}
    </div>
  );

  return (
    <div className="opensource">
      {variant === "opensource" ? (
        <>
          {renderOpensourceAbout}
          {renderOpensourceCards}
          <div className="opensource_button">
            <a href="/products#our-products">
              <Button
                variant="secondaryBlack"
                children="Explore our projects"
                type="submit"
              ></Button>
            </a>
          </div>
        </>
      ) : (
        <>
          {renderBlockchainAbout}
          {renderBlockchainCards}
          <div className="opensource_button"></div>
        </>
      )}
    </div>
  );
};

export default Opensource;
