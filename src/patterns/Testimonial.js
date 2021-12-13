import React from "react";
import "../style/patterns/testimonial.scss";

import quotes from "../assets/images/double_quotes.png";
import james from "../assets/icons/james.svg";
import person1 from "../assets/icons/person1.svg";
import person2 from "../assets/icons/person2.svg";
import person3 from "../assets/icons/person3.svg";

import left from "../assets/icons/circleLeft.svg";
import right from "../assets/icons/circleRight.svg";

import network from "../assets/icons/networkiconLite.svg";
import Button from "../components/Button";

const Testimonial = () => {
  const renderTestimonialAbout = (
    <div>
      <p className="mb-20 text_primary_14_W500 silverGrad">TESTIMONIALS</p>
      <p className="mb-20 text_primary_24 silverGrad">
        Our community members and customers love what we do
      </p>
      <p className="mb-30 text_secondaryLite_14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas
        libero, ut ante. Dolor sed risus ac diam nisl nisi. Platea consectetur
        facilisis justo neque amet.
      </p>
      <div className="testimonial_buttonWrap">
        <Button
          variant="secondary"
          children="Tell us your views"
          type="submit"
        ></Button>
      </div>
    </div>
  );

  const renderTestimonialComment = (
    <div className="testimonial_comment">
      <img
        src={network}
        alt="network"
        className="testimonial_comment_network"
      />
      <img src={quotes} alt="quotes" className="mb-20" />
      <p className="mb-30 text_secondaryLite_14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id
        amet fames euismod viverra accumsan fermentum. Ipsum vitae enim bibendum
        et nunc, amet, mi. Pharetra cras gravida varius adipiscing arcu vel ut.
        Accumsan rutrum rhoncus enim quis. Cras bibendum cum eget urna ut nunc.
        Massa faucibus urna dignissim risus. Nascetur ultricies viverra risus
        elit. Aliquet elit nisi molestie sapien interdum nunc laoreet massa.
        Odio posuere tortor in purus.
      </p>
      <div className="testimonial_comment_footer">
        <div>
          <img src={james} alt="avatar" />
          <p className="text_primary_16_w500 mt-5">James Lyinde</p>
          <img src={person1} alt="avatar" />
          <img src={person2} alt="avatar" />
          <img src={person3} alt="avatar" />
        </div>
        <div>
          <img src={left} alt="arrowLeft" className="pointer" />
          <img src={right} alt="arrowRight"  className="pointer"/>
        </div>
      </div>
    </div>
  );

  return (
    <div className="testimonial">
      {renderTestimonialAbout}
      {renderTestimonialComment}
    </div>
  );
};

export default Testimonial;
