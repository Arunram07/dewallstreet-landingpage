import React from "react";
import "../style/patterns/aboutCarousel.scss";

import { ReactComponent as Chain } from "../assets/icons/chainClubbed.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrowRight.svg";

import NavBar from "./NavBar";
import Button from "../components/Button";

const AboutCarousel = ({ heading, para, variant, ...rest }) => {
  const renderAbout = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        Empowering generations of <span className="primeGrad">open source</span> innovators
      </p>
      <p className="text_secondaryLite_14">{para}</p>
    </>
  );

  const renderProduct = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        The customer and employee
        <span className="primeGrad"> delight engine</span> you deserve
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <div className="buttonWrap mt-30">
        <span style={{ color: "#fff", fontFamily: "Metropolis-Regular" }}>Browse projects</span>
        <Button variant="primary" children="Start free trail" imgLeft={<Arrow />} />
      </div>
    </>
  );

  const renderService = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        #Top rated <span className="primeGrad">open source </span> development company
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <div className="buttonWrap mt-30">
        <Button variant="secondary" children="Get a quote" />
        <Button variant="secondary" children="Get a free demo" />
      </div>
    </>
  );

  const renderWhyUs = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        Why choose DeWall Street Corp. as your go to <span className="primeGrad">open source </span>{" "}
        blockchain development Company?
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <div className="buttonWrap mt-30">
        <Button variant="secondary" children="Get a quote" />
        <Button variant="secondary" children="Get a free demo" />
      </div>
    </>
  );

  const renderWhoAreWe = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        We help <span className="primeGrad">open technology</span> projects build world class open
        source software, communities and companies
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <div className="buttonWrap mt-30">
        <Button variant="secondary" children="Tell us your product idea" type="submit" />
      </div>
    </>
  );

  const renderCarousel = (
    <div className="aboutCarousel_data">
      <div>
        {rest.about && renderAbout}
        {rest.product && renderProduct}
        {rest.service && renderService}
        {rest.whyus && renderWhyUs}
        {rest.whoAreWe && renderWhoAreWe}
      </div>
      <div className="aboutCarousel_data_abstract_image">
        <Chain />
      </div>
    </div>
  );

  return (
    <div className="aboutCarousel">
      {!(rest.whoAreWe || rest.whyus) && (
        <NavBar title={rest.about ? "About" : rest.product ? "Product" : "Service"} />
      )}
      {renderCarousel}
    </div>
  );
};

export default AboutCarousel;
