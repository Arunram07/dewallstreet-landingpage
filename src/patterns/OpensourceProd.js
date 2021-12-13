import React from "react";
import "../style/patterns/opensourceProd.scss";

import Button from "../components/Button";
import OpensourceProdCard from "../cards/OpensourceProdCard";

import { product } from "../data/openSource";

const OpensourceProd = () => {
  return (
    <div className="openSource">
      <div className="openSource_heading">
        <p className="mb-20 text_dark_24">
          Discover the <span className="primeGrad">open source</span> products we have built
        </p>
        <p className="mb-30 text_secondaryDark_14">
          The DeWall Street Corporation enables companies to drive global innovation by growing open
          technology ecosystems that transform industries.
        </p>
      </div>
      <div className="openSource_card">
        {product.map((data, i) => (
          <OpensourceProdCard key={i} image={data.image} heading={data.heading} para={data.para} />
        ))}
      </div>
      <div className="openSource_buttonWrap">
        <Button variant="secondaryBlack" children="Explore more projects" />
      </div>
    </div>
  );
};

export default OpensourceProd;
