import React from "react";
import "../style/card.scss";
import Button from "../components/Button";

const OpensourceProdCard = ({ image, heading, para }) => {
  return (
    <div className="opensourceCard">
      <img src={image} alt="prodImage" className="mb-20 opensourceCard_prodImage"/>
      <p className="text_dark_16 mb-20">{heading}</p>
      <p className="text_secondaryDark_14 mb-20">
        {para}
      </p>
      <div className="opensourceCard_button">
          <span className="mt-5 pointer">Learn more</span>
          <Button variant="secondaryBlack" children="Start trail"/>
      </div>
    </div>
  );
};

export default OpensourceProdCard;
