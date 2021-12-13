import React, { useState } from "react";

import Button from "../components/Button";

import "../style/patterns/faqs.scss";
import "../style/patterns/privacyNterms.scss";
import faq from "../assets/icons/faqs.svg";
import chainPassthrough from "../assets/icons/networkiconLite.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
import arrowUpB from "../assets/icons/arrowUpB.svg";

const Faqs = () => {
  const [toggle, setToggle] = useState("1");

  const ContributionList = ({ heading, value, imageB, image }) => {
    return (
      <div
        className="contribution_list"
        onClick={() => {
          setToggle(`${value}`);
        }}
        style={{borderBottom : `${value}` !== toggle && '0.8px solid rgba(255, 255, 255, 0.05)'}}
      >
        <p
          className={
            `${value}` === toggle
              ? "text_secondaryDark_16 primeGrad"
              : "text_secondaryDark_16"
          }
        >
          {heading}
        </p>
        <img src={`${value}` === toggle ? imageB : image} alt="arrow" />
      </div>
    );
  };

  const ContributionData = ({ heading, data, value }) => {
    return (
      <div
        className="contribution_detail"
        style={{ display: `${value}` === toggle ? "block" : "none" }}
      >
        <p className="text_primary_16 mb-20">{heading}</p>
        <p className="text_secondaryLite_14 mb-30">{data}</p>
      </div>
    );
  };

  return (
    <div className="faqs">
      <div className="faqs_heading">
        <p className="text_primary_14_W500_v3">FREQUENTLY ASKED QUESTIONS</p>
        <p className="text_primary_24 silverGrad">Still confused about us?</p>
        <p className="text_secondaryLite_14">
          Everything you need to know and are skeptical about, we are here to
          clear all your doubts.
        </p>
        <div>
          <Button variant="secondary" children="Still confused? Contact us" />
        </div>
      </div>
      <div className="faqs_service">
        <div>
          <img src={faq} alt="faq" className="mb-30" />
          <p className="mb-30 silverGrad text_primary_16_Med">
            Tabel of contents
          </p>
          <img src={chainPassthrough} alt="chain" className="chainNetwork" />
          <div className="text_label_14">
            <p>Overview</p>
            <p>Services</p>
            <p>Products</p>
            <p>Retaining your information</p>
            <p>Privacy policy</p>
            <p>Courses</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <ContributionList
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis turpis adipis."
                value="1"
                image={arrowDown}
                imageB={arrowUpB}
              />
              <ContributionData
                data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae et quam imperdiet etiam amet. Tincidunt integer ultricies ipsum gravida in in consequat, sed. Adipiscing proin tincidunt et ipsum. Vestibulum tellus aliquet urna aliquam, aenean enim non. Sagittis ipsum aliquam condimentum consectetur amet arcu, nibh sit praesent. Tempor arcu, pellentesque lacus elementum, sed faucibus. Nisl dui at fringilla pellentesque purus sit. "
                value="1"
              />
              <ContributionList
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis turpis adipis."
                value="2"
                image={arrowDown}
                imageB={arrowUpB}
              />
              <ContributionData
                data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae et quam imperdiet etiam amet. Tincidunt integer ultricies ipsum gravida in in consequat, sed. Adipiscing proin tincidunt et ipsum. Vestibulum tellus aliquet urna aliquam, aenean enim non. Sagittis ipsum aliquam condimentum consectetur amet arcu, nibh sit praesent. Tempor arcu, pellentesque lacus elementum, sed faucibus. Nisl dui at fringilla pellentesque purus sit. "
                value="2"
              />
              <ContributionList
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis turpis adipis."
                value="3"
                image={arrowDown}
                imageB={arrowUpB}
              />
              <ContributionData
                data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae et quam imperdiet etiam amet. Tincidunt integer ultricies ipsum gravida in in consequat, sed. Adipiscing proin tincidunt et ipsum. Vestibulum tellus aliquet urna aliquam, aenean enim non. Sagittis ipsum aliquam condimentum consectetur amet arcu, nibh sit praesent. Tempor arcu, pellentesque lacus elementum, sed faucibus. Nisl dui at fringilla pellentesque purus sit. "
                value="3"
                image={arrowDown}
                imageB={arrowUpB}
              />
              <ContributionList
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis turpis adipis."
                value="4"
                image={arrowDown}
                imageB={arrowUpB}
              />
              <ContributionData
               data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae et quam imperdiet etiam amet. Tincidunt integer ultricies ipsum gravida in in consequat, sed. Adipiscing proin tincidunt et ipsum. Vestibulum tellus aliquet urna aliquam, aenean enim non. Sagittis ipsum aliquam condimentum consectetur amet arcu, nibh sit praesent. Tempor arcu, pellentesque lacus elementum, sed faucibus. Nisl dui at fringilla pellentesque purus sit. "
                value="4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
