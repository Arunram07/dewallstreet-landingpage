import React from "react";
import { Link } from "react-router-dom";
import "../style/patterns/learnExplore.scss";

import Button from "../components/Button";

const LearnExplore = ({ img1, img2, head1, para1, btn1, head2, para2, btn2, btn2Link }) => {
  return (
    <div>
      <div className="learnPattern mb-30" style={{ backgroundImage: `url(${img1})` }}>
        <div>
          <p className="mb-20 text_primary_24">{head1}</p>
          <p className="mb-30 text_secondaryLite_14 para">{para1}</p>
          <div className="buttonWrapper">
            <Button variant="secondary" children={btn1} />
          </div>
        </div>
      </div>
      <div className="explorePattern" style={{ backgroundImage: `url(${img2})` }}>
        <div>
          <p className="mb-20 text_primary_24">{head2}</p>
          <p className="mb-30 text_secondaryLite_14 para">{para2}</p>
          <div className="buttonWrapper">
            <Link to={btn2Link ? btn2Link : "/"}>
              <Button variant="secondary" children={btn2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnExplore;
