import React from "react";
import "../style/card.scss";

import clock from "../assets/icons/clock.svg";

const BlogCard = ({ blogImg, blogType, blogHeading, blogPara, time, date }) => {
  return (
    <div className="blogCard">
      <div className="blogCard_image mb-15">
        <img src={blogImg} alt="blog" />
        <p className="text_primary_16_w400">{blogType}</p>
      </div>
      <p className="text_primary_16 mb-10">{blogHeading}</p>
      <p className="text_secondaryLite_14 mb-15">
        {blogPara} <span style={{ color: "#0090CE", cursor: "pointer" }}>Read More</span>
      </p>
      <div className="blogCard_time text_label_14">
        <p>
          <img src={clock} alt="clock" className="mr-10" />
          <span>{time}</span>
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
