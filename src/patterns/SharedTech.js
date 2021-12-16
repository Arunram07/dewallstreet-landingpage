import React from "react";
import "../style/patterns/sharedTech.scss";

// import { ReactComponent as Play } from "../assets/icons/play.svg";

const SharedTech = ({ heading, para, image }) => {
  return (
    <div className="sharedTech" style={{ backgroundImage: `url(${image})` }}>
      <div className="sharedTech_para">
        <p className="mb-20 text_primary_24">{heading}</p>
        <p className="mb-30 text_secondaryLite_14">{para}</p>
        {/* <div className="mb-10 pointer">
          <Play />
          <p className="text_primary_14_W500_v3">Play Video</p>
        </div> */}
      </div>
    </div>
  );
};

export default SharedTech;
