import React from "react";
import "../style/card.scss";

const EcosystemCard = ({ logoImg, heading, data, comp1, comp2 }) => {
  return (
    <div className="ecosystemCard">
      <img src={logoImg} alt="logoImg" className="mb-30" />
      <p className="mb-20 text_dark_16">{heading}</p>
      <p className="mb-30 text_secondaryDark_14">{data}</p>
      {/* <div className="ecosystemCard_company">
                <img src={comp1} alt="comp1"/>
                <img src={comp2} alt="comp2"/>
            </div> */}
    </div>
  );
};

export default EcosystemCard;
