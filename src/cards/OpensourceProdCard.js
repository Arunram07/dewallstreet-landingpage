import React from "react";
import "../style/card.scss";
// import Button from "../components/Button";

const OpensourceProdCard = ({ image, heading, para }) => {
  return (
    <div className="opensourceCard">
      <div style={{ height: "320px", position: "relative" }} className="mb-20 image-container">
        <img
          src={image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="prodImage"
          className="opensourceCard_prodImage"
        />
        <button className="hover-btn">View Project</button>
      </div>
      <p className="text_dark_16 mb-20">{heading}</p>
      <p className="text_secondaryDark_14 mb-20">{para}</p>
      <div className="opensourceCard_button">
        <span className="mt-5 pointer">Learn more</span>
        {/* <Button variant="secondaryBlack" children="Start trail"/> */}
      </div>
    </div>
  );
};

export default OpensourceProdCard;
