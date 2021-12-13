import React from "react";
import "../style/patterns/blogs.scss";

import BlogCard from "../cards/BlogCard";
import Button from "../components/Button";

import { blog1_data, blog2_data } from "../data/blogs";

const Blogs = ({ variant }) => {
  const renderCardsHome = (
    <div className="blogs_card mb-30">
      {blog1_data.map((data, i) => (
        <BlogCard
          key={i}
          blogImg={data.blogImg}
          blogType={data.blogType}
          blogHeading={data.blogHeading}
          blogPara={data.blogPara}
          time={data.time}
          date={data.date}
        />
      ))}
    </div>
  );

  const renderCardsService = (
    <div className="blogs_card mb-30">
      {blog2_data.map((data, i) => (
        <BlogCard
          key={i}
          blogImg={data.blogImg}
          blogType={data.blogType}
          blogHeading={data.blogHeading}
          blogPara={data.blogPara}
          time={data.time}
          date={data.date}
        />
      ))}
    </div>
  );

  return (
    <div className="blogs">
      <div className="blogs_heading">
        <p className="text_primary_14_W500 mb-20 silverGrad">MORE FROM US</p>
        <p className="text_primary_24 mb-30 silverGrad">
          Latest from the DeWall Street Corporation and blogs
        </p>
      </div>
      {variant === "home" ? renderCardsHome : renderCardsService}
      <div className="blogs_buttonWrap">
        <Button variant="secondary" children="Load More" type="submit"></Button>
        <div></div>
      </div>
    </div>
  );
};

export default Blogs;
