import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Carousel from "../patterns/Carousel";
import About from "../patterns/About";
import Features from "../patterns/Features";
import Opensource from "../patterns/Opensource";
import Contribution from "../patterns/Contribution";
import LearnExplore from "../patterns/LearnExplore";
import Ecosystem from "../patterns/Ecosystem";
import Testimonial from "../patterns/Testimonial";
import Blogs from "../patterns/Blogs";
import Contact from "../patterns/Contact";

import img1 from "../assets/images/dStechMethod.png";
import img2 from "../assets/images/exploreImg.png";

const HomeScreen = () => {
  useEffect(() => {
    document.title = "DeWall Street";
  }, []);
  return (
    <>
      <Helmet>
        <title>DeWallStreet</title>
        <meta
          name="description"
          content="DeWallStreet is a Open Source, Decentralized Innovation product builders that are built on trust."
        />
      </Helmet>
      <Carousel />
      <About variant="whoAreWe" />
      <Features />
      <Opensource variant="opensource" />
      <Contribution />
      <LearnExplore
        img1={img1}
        head1="The DeWall Street Corporation Tech Method"
        para1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus a
            feugiat vitae pellentesque urna massa in. Sit id hendrerit elit
            cursus mattis aliquam, sociis nibh. Nec arcu augue eu tellus vitae
            neque."
        btn1="Learn More"
        img2={img2}
        head2="From fledgling project to category leader"
        para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus a
        feugiat vitae pellentesque urna massa in. Sit id hendrerit elit
        cursus mattis aliquam, sociis nibh. Nec arcu augue eu tellus vitae
        neque."
        btn2="Explore projects"
      />
      <Ecosystem
        heading=" At DeWall Street Corporation, we work with various sustainable
        ecosystems"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In morbi est
        enim adipiscing elementum libero a in arcu. Nunc massa, sollicitudim."
      />
      <Testimonial />
      <Blogs variant="home" />
      <Contact />
    </>
  );
};

export default HomeScreen;
