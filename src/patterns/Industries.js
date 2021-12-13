import React from "react";
import "../style/patterns/industries.scss";

import Button from "../components/Button";

import sectors from "../assets/images/sectors.svg";

const Industries = () => {
  return (
    <div className="industries">
      <div>
        <p className="mb-20 text_primary_14_W500">INDUSTRIES WE WORK WITH</p>
        <p className="mb-20 text_primary_18_w400 silverGrad">
          <span className="primeGrad">Open source </span>
          blockchain software development services for various industries across the globe
        </p>
        <p className="mb-20 text_secondaryLite_14">
          DeWall Street Corporation, the best in the market Blockchain Software Development company
          serve different industry verticals through its Blockchain Software Development services.
          Our services include design and development of applications delivering specific functions
          to serve different audiences seeking multi-use case.
        </p>
        <p className="mb-30 text_secondaryLite_14">
          Get onboarded with the B2B Business acumen and dominate the Crypto domains through our
          best in class product delivery.
        </p>
        <div>
          <Button variant="secondary" children="Request a quote" />
          <Button variant="secondary" children="Tell us your product idea" />
        </div>
      </div>
      <div className="block_image">
        <img src={sectors} alt="sectors" />
      </div>
    </div>
  );
};

export default Industries;
