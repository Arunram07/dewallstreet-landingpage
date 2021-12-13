import React from "react";

import "../style/card.scss";

import arrow from "../assets/icons/arrowRight.svg";

const AboutCard = ({ variant, image, amount, data, link }) => {
  
  const aboutCard = (
    <div className="aboutCards">
      {image && <img src={image} alt="aboutImage" className="mb-30" />}
      <p className="mb-20 text_primary_16 primeGrad">{amount}</p>
      <p className="text_secondaryLite_14">{data}</p>
    </div>
  );
  const privacyCard = (
    <div className="privacyCard">
      <img src={image} alt="aboutImage" className="mb-30" />
      <p className="mb-20 text_primary_16 primeGrad">{amount}</p>
      <p className="text_secondaryLite_14">{data}</p>

      <div className="aboutCards_link">
        <p className="text_primary_14_W500_v3">{link}</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
  return <>{variant === "privacy" ? privacyCard : aboutCard}</>;
};

export default AboutCard;
