import React from "react";
import "../style/card.scss";

import arrowRight from "../assets/icons/arrowRight.svg";

const FeatureCard = ({ mainHeading, id, heading, data, link, date, time }) => {
  return (
    <div
      className="featureCard"
      // style={{
      //   background: `${id}===1 ? url("../assets/images/featuredContent.png") : ${id}===2 ? url("../assets/images/featuredWebminar.png") : url("../assets/images/feature1.png") `,
      // }}
    >
      <p className="mb-30 text_primary_24 silverGrad">{mainHeading}</p>
      <div className="featureCard_details" id={`${id}_details`}>
        <p className="mb-10 text_primary_16 primeGrad">{heading}</p>
        {data ? (
          <p className="mb-20 text_secondaryLite_14">{data}</p>
        ) : (
          <div className="mb-20 text_secondaryLite_14">
            <p>{date}</p>
            <p>{time}</p>
          </div>
        )}
        <p className="featureCard_details_link">
          <span className="text_primary_14_v2 mr-10">{link}</span>
          <img src={arrowRight} alt="arrow" />
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
