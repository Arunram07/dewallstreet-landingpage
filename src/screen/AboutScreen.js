import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../style/screens/aboutScreen.scss";

import AboutCarousel from "../patterns/AboutCarousel";
import Contribution from "../patterns/Contribution";
import SharedTech from "../patterns/SharedTech";
import Team from "../patterns/Team";
import LearnExplore from "../patterns/LearnExplore";

import img1 from "../assets/images/DStechMethod1.png";
import img2 from "../assets/images/exploreImg.png";
import tech from "../assets/images/processBuilding.png";
import FeatureCard from "../cards/FeatureCard";

const AboutScreen = () => {
  useEffect(() => {
    document.title = "About | DeWall Street";
  }, []);

  return (
    <div className="nav_pad">
      <Helmet>
        <title>About | DeWallStreet</title>
        <meta name="description" content="Empowering generations of open source innovators" />
      </Helmet>
      <div className="pad">
        <AboutCarousel
          heading="ABOUT THE DEWALL STREET CORPORATION"
          about="true"
          para=" At DeWall Street, we are always brainstorming and coming up with new
          ideas. Our zeal for creation never dies down. The projects we have
          taken up are a reflection of this very fact. We maintain a standard
          when it comes to product development that never fails to please our
          clients. Our work speaks for us and is the most accurate
          representation of the DeWall Street spirit. The DeWall Street
          Corporation provides a neutral, trusted hub for developers to code,
          manage, and scale open technology projects in the open source web."
        />
      </div>
      <SharedTech
        heading="Unlocking the value of shared technology"
        para="Innovation comes from everywhere. We help companies and developers
          identify and contribute to the projects that matter. Working together,
          the Open Source Community is addressing the challenges of industry and
          technology for the benefit of society. Code is power. Community is
          strength. We are one."
        image={tech}
      />
      <Contribution />
      <Team />
      <LearnExplore
        img1={img1}
        head1="Creating inclusive communities everywhere"
        para1="At the DeWall Street Corporation, we are deeply committed to fostering a work culture and environment of diversity and inclusion. Because diversity drives innovation and inclusion means more ideas and contributions."
        btn1="Learn Diversity & Inclusion efforts"
        img2={img2}
        head2="From fledgling project to category leader"
        para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus a
        feugiat vitae pellentesque urna massa in. Sit id hendrerit elit
        cursus mattis aliquam, sociis nibh. Nec arcu augue eu tellus vitae
        neque."
        btn2="Explore projects"
      />
      <div className="aboutFeatures">
        <FeatureCard
          id="feature5"
          heading="Help open source technologies grow"
          data="Building the tomorrow we need starts with the work we do today at The DeWall Street Corporation"
          link="Learn about Mentorship"
        />
        <FeatureCard
          id="feature6"
          heading="Get in touch with us"
          data="Let us know how we can help you unlock your potential or help you in your project."
          link="Contact us"
        />
      </div>
    </div>
  );
};

export default AboutScreen;
