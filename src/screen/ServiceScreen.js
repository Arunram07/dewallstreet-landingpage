import React from "react";
import { Helmet } from "react-helmet";

import About from "../patterns/About";
import AboutCarousel from "../patterns/AboutCarousel";
import Industries from "../patterns/Industries";
import SharedTech from "../patterns/SharedTech";
import Blogs from "../patterns/Blogs";
import Opensource from "../patterns/Opensource";

import service from "../assets/images/servicescreen.png";
import FreeDemo from "../patterns/FreeDemo";
import Faqs from "../patterns/Faqs";

const ServiceScreen = () => {
  return (
    <div className=" nav_pad ">
      <Helmet>
        <title>Services | DeWallStreet</title>
        <meta
          name="description"
          content="DeWallStreet Corporation offers premier Blockchain Development Services and Solutions that facilitates startups and enterprises to leverages decentralization, transperancy and automation in the world information technology business."
        />
      </Helmet>
      <div className="pad">
        <AboutCarousel
          heading="SERVICES WE PROVIDE"
          service="true"
          para="Being the best open source development company in the world, DeWall Street Corporation offers premier Blockchain Development Services & Solutions that facilitates startups and 
        enterprises to leverages decentralization, transperancy and automation in the world information technology business."
        />
      </div>
      <SharedTech
        heading="Leading Blockchain Development Services "
        para="Functions with the prime aim of booming Crypto and Blockchain exposure to its seekers. We avail the business strategies that come up with the perspective of leveraging the participant’s investment.we make each and every penny of yours worth it."
        image={service}
      />
      <Industries />
      <Opensource variant="blockchain" />
      <About variant="whyUs" />
      <Blogs variant="service" />
      {/* <Faqs /> */}
      <FreeDemo />
    </div>
  );
};

export default ServiceScreen;
