import React from "react";
import "../style/patterns/features.scss";

import FeatureCard from "../cards/FeatureCard";

import icon from "../assets/icons/icon_medium.svg";
import Button from "../components/Button";

import featureContent from "../data/featureContent.json";

const Features = () => {
  return (
    <div className="features">
      <div>
        {featureContent.map((data, i) => (
          <FeatureCard
            key={i}
            id={data.id}
            mainHeading={data.mainHeading}
            data={data.data}
            date={data.date}
            time={data.time}
            heading={data.heading}
            link={data.link}
          />
        ))}
        <div className="features_explore">
          <img src={icon} alt="icon" className="mb-30" style={{ marginTop: "50px" }} />
          <p className="mb-20 text_primary_24 silverGrad">
            Explore more such amazing content & resources
          </p>
          <p className="mb-30 text_secondaryLite_14 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus a feugiat vitae
            pellentesque urna massa in. Sit id hendrerit elit cursus mattis aliquam, sociis nibh.
            Nec arcu augue eu tellus vitae neque.
          </p>

          <div className="features_explore_buttonWrap">
            <Button variant="secondary" children="Explore resources" type="submit"></Button>
            <div></div>
          </div>
        </div>
        {/* <FeatureCard
          id="feature1"
          mainHeading="Featured content"
          data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl blandit odio in. Non semper natoque risus et erat donec at. Pellentesque et suspendisse volutpat elementum et."
          heading="Linux Kernel mentees break open source glass ceiling"
          link="Read full blog post"
        />
        <FeatureCard
          id="feature2"
          mainHeading="Featured webminar"
          date="Date: Jul 13, 2021"
          time="5:30 - 7:00PM PDT (UTC-7)"
          heading="Extra Boot Configuration and Boot-time Tracing with DeWall Street Corporation"
          link="Register now"
        /> */}
      </div>
      <div>
        {/* <FeatureCard
          id="feature3"
          mainHeading="Featured trainings"
          data="Create a RISC-V CPU with modern open source circuit design tools, methodologies, and microarchitecture, all from your browser."
          heading="Building a RISC-V CPU Core"
          link="Enroll now"
        /> */}
      </div>
    </div>
  );
};

export default Features;
