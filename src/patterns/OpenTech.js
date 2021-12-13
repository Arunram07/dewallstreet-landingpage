import React from "react";
import "../style/patterns/openTech.scss";

import AboutCard from "../cards/AboutCard";

import { technology } from "../data/openSource";

const OpenTech = () => {
  return (
    <div className="openTech">
      <div className="openTech_heading">
        <p className="mb-30 text_primary_24">
          <span className="primeGrad">Open technology </span>developers are making a difference
        </p>
      </div>
      <div className="openTech_cards">
        {technology.map((data, i) => (
          <AboutCard key={i} image={data.image} data={data.data} amount={data.amount} />
        ))}
      </div>
    </div>
  );
};

export default OpenTech;
