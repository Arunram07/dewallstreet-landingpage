import React, { useState } from "react";
import "../style/patterns/contact.scss";
import "../style/patterns/aboutCarousel.scss";
import "../style/screens/getFreeQuotes.scss";

import enter from "../assets/icons/enter.svg";
import loading from "../assets/icons/loading.svg";
import circleUp from "../assets/icons/circleUp.svg";
import circleDown from "../assets/icons/circleDown.svg";
import Button from "../components/Button";

// import ques1 from "../assets/icons/ques1.svg";
import ques2 from "../assets/icons/ques2.svg";
import ques3 from "../assets/icons/ques3.svg";
import ques4 from "../assets/icons/ques4.svg";
import arrowUWhite from "../assets/icons/arrowUpWhite.svg";
import NavBar from "../patterns/NavBar";

const GetFreeQuote = () => {
  const [toggle, setToggle] = useState("0");

  const Ques = () => {
    return (
      <>
        <div>
          <div className="contact_left">
            <div>
              <p className="mb-20 text_primary_14_W500 silverGrad">GET A FREE DEMO</p>
              <p className="mb-20 text_primary_24 silverGrad">
                Get an extpertise demo of our products
              </p>
              <p className="mb-30 text_secondaryLite_14">
                Send us your details and get a free expertise demo of our exclusive products.
              </p>
              <div className="contact_link">
                <Button variant="secondary" children="Count me in" type="submit"></Button>
                <p className="ml-20 mt-10">
                  <span className="text_secondaryLite_14">press Enter</span>
                  <img src={enter} alt="arrow" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={loading} alt="loading" />
            <p className="text_secondaryLite_14">0 out of 3 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={circleUp} alt="up" />
            <img src={circleDown} alt="down" onClick={() => setToggle("1")} />
          </div>
        </div>
      </>
    );
  };

  const Ques1 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">First up, what’s your name?</p>
          <input type="text" placeholder="Type your answer here" />
          <div className="contact_link">
            <Button variant="secondary" children="Okay" type="submit"></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques2} alt="loading" />
            <p className="text_secondaryLite_14">1 out of 4 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("0")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("2")} />
          </div>
        </div>
      </>
    );
  };

  const Ques2 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">What’s your email address?</p>
          <input type="text" placeholder="Type your answer here" />
          <p className="mb-20 text_primary_24 silverGrad">And your phone number</p>
          <input type="text" placeholder="Type your answer here" />
          <div className="contact_link">
            <Button variant="secondary" children="Okay" type="submit"></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques3} alt="loading" />
            <p className="text_secondaryLite_14">2 out of 3 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("1")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("3")} />
          </div>
        </div>
      </>
    );
  };

  const Ques3 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad email">What’s your Telegram/Skype ID?</p>
          <input type="text" placeholder="Type your answer here" />
          <p className="mb-20 text_primary_24 silverGrad email">
            Finally, tell us about your product in breif.
          </p>
          <input type="text" placeholder="Type your answer here" />
          <div className="contact_link">
            <Button variant="secondary" children="Okay" type="submit"></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques4} alt="loading" />
            <p className="text_secondaryLite_14">3 out of 3 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("2")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("4")} />
          </div>
        </div>
      </>
    );
  };

  const Final = () => {
    return (
      <>
        <div>
          <div className="contact_left">
            <div>
              <p className="mb-20 text_primary_24 silverGrad">
                All done, a demo will be sent shortly
              </p>
              <p className="text_secondaryLite_14">
                Thank you for telling us your product idea. Currently, our team is going through the
                details provided by you. We will be sending you the free demo in few hours.
              </p>
              <div className="contact_link contact_final" style={{ marginTop: "30px" }}>
                <Button
                  variant="secondary"
                  children="Tell us another product idea"
                  type="submit"
                ></Button>
                <p className="ml-20 mt-10">
                  <span className="text_secondaryLite_14">Done for now</span>
                  <img src={enter} alt="arrow" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_social"></div>
      </>
    );
  };

  return (
    <>
      <div className="freeQuoteNav">
        <NavBar />
      </div>
      <div className="contact freeQuote">
        {toggle === "0" && <Ques />}
        {toggle === "1" && <Ques1 />}
        {toggle === "2" && <Ques2 />}
        {toggle === "3" && <Ques3 />}
        {toggle === "4" && <Final />}
      </div>
    </>
  );
};

export default GetFreeQuote;
