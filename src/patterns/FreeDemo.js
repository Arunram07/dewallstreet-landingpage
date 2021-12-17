import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../style/patterns/contact.scss";

import enter from "../assets/icons/enter.svg";
import loading from "../assets/icons/loading.svg";
import circleUp from "../assets/icons/circleUp.svg";
import circleDown from "../assets/icons/circleDown.svg";
import Button from "../components/Button";

import ques1 from "../assets/icons/ques1.svg";
import ques2 from "../assets/icons/ques2.svg";
import ques3 from "../assets/icons/ques3.svg";
import ques4 from "../assets/icons/ques4.svg";
import arrowUWhite from "../assets/icons/arrowUpWhite.svg";

const contact = [
  {
    image: require("../assets/icons/blockchainW.svg").default,
    about: "Blockchain solutions",
  },
  {
    image: require("../assets/icons/exchangeW.svg").default,
    about: "Crypto exchange development",
  },
  {
    image: require("../assets/icons/altCoinW.svg").default,
    about: "Tokens & Altcoins development",
  },
  {
    image: require("../assets/icons/defiW.svg").default,
    about: "Defi development",
  },
  {
    image: require("../assets/icons/nftMarketW.svg").default,
    about: "NFT marketplace",
  },
  {
    image: require("../assets/icons/dAppW.svg").default,
    about: "Dapp development",
  },
];

const FreeDemo = () => {
  const [toggle, setToggle] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    username: "",
    email: "",
    phoneNumber: "",
    projectDescription: "",
    interests: [],
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email format").required("This field is required"),
    phoneNumber: Yup.number().typeError("Invalid number format").required("This field is required"),
    projectDescription: Yup.string()
      .min(100, "minimum 100 characters required")
      .required("This field is required"),
    interests: Yup.array().required("This field is required"),
  });

  const handleSubmit = async (values, onSubmitProps) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8000/services", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      setToggle("5");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const Ques = () => {
    return (
      <>
        <div>
          <div className="contact_left">
            <div>
              <p className="mb-20 text_primary_14_W500 silverGrad">GET A QUOTE</p>
              <p className="mb-20 text_primary_24 silverGrad">
                Discover what DeWall Street can do for you
              </p>
              <p className="mb-30 text_secondaryLite_14">
                Send us your details and requirements and our team will get back to you shortly.
              </p>
              <div className="contact_link">
                <Button
                  variant="secondary"
                  onClick={() => setToggle("1")}
                  children="Show me"
                  type="submit"
                ></Button>
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
            <p className="text_secondaryLite_14">0 out of 4 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={circleUp} alt="up" />
            <img src={circleDown} alt="down" onClick={() => setToggle("1")} />
          </div>
        </div>
      </>
    );
  };

  const Ques1 = ({ values, errors }) => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">First up, what’s your name?</p>
          <Field type="text" placeholder="Type your answer here" name="username" />
          <p className="error_input mb-20"> {errors?.username}</p>
          <div className="contact_link">
            <Button
              variant="secondary"
              onClick={errors.username || !values.username ? null : () => setToggle("2")}
              children="Okay"
              type="submit"
            ></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques1} alt="loading" />
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

  const Ques2 = ({ errors }) => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad email">What’s your email address?</p>
          <Field type="text" placeholder="Type your answer here" name="email" />
          <p className="error_input mb-20"> {errors?.email}</p>
        </div>
        <div>
          <p className="mb-20 text_primary_24 silverGrad email">And your phone number?</p>
          <Field type="text" placeholder="Type your answer here" name="phoneNumber" />
          <p className="error_input mb-20"> {errors?.phoneNumber}</p>
          <div className="contact_link">
            <Button
              variant="secondary"
              onClick={errors.email || errors.phoneNumber ? null : () => setToggle("3")}
              children="Okay"
              type="submit"
            ></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques2} alt="loading" />
            <p className="text_secondaryLite_14">2 out of 4 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("1")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("3")} />
          </div>
        </div>
      </>
    );
  };

  const Ques3 = ({ errors }) => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">How can we help you?</p>
          <div className="checkBoxGrid">
            {contact.map(({ image, about }, index) => (
              <div key={index.toString()} className="checkBox_div2">
                <img src={image} alt="checkbox" className="mb-20" />
                <p className="mb-20" style={{ fontFamily: "Metropolis-Regular" }}>
                  {about}
                </p>
                <label className="container">
                  <Field type="checkbox" name="interests" value={about} />
                </label>
              </div>
            ))}
          </div>
          <p className="error_input mb-20"> {errors?.interests}</p>
          <div className="contact_link">
            <Button
              variant="secondary"
              onClick={errors?.interests ? null : () => setToggle("4")}
              children="Okay"
              type="submit"
            ></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques3} alt="loading" />
            <p className="text_secondaryLite_14">3 out of 4 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("2")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("4")} />
          </div>
        </div>
      </>
    );
  };

  const Ques4 = ({ errors, isValid }) => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">
            Finally, tell us about your product in breif.
          </p>
          <Field type="text" placeholder="Type your answer here" name="projectDescription" />
          <p className="error_input mb-20"> {errors?.projectDescription}</p>

          <div className="contact_link" style={{ marginTop: "30px" }}>
            <button
              type="submit"
              disabled={errors?.projectDescription}
              style={{ border: "none", outline: "none", background: "transparent" }}
            >
              <Button variant="secondary" type="submit" children="Submit"></Button>
            </button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques4} alt="loading" />
            <p className="text_secondaryLite_14">4 out of 4 questions answered</p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("3")} />
            {/* <button
              type="submit"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                cursor: isValid ? "pointer" : "default",
              }}
            >
              <img src={circleDown} alt="down" />
            </button> */}
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
                All done, You are on top of our priority now.
              </p>
              <p className="text_secondaryLite_14">
                Thank you for telling us your product idea. Currently, our team is going through the
                details provided by you. We shall be arranging a call with you between the next 2
                business days.
              </p>
              <div className="contact_link contact_final" style={{ marginTop: "30px" }}>
                <Button
                  variant="secondary"
                  children="Tell us another product idea"
                  type="submit"
                  onClick={() => setToggle("0")}
                ></Button>
                <p className="ml-20 mt-10 pointer" onClick={() => setToggle("0")}>
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
    <div className="contact" id="get-quote">
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            {toggle === "0" && <Ques />}
            {toggle === "1" && <Ques1 {...props} />}
            {toggle === "2" && <Ques2 {...props} />}
            {toggle === "3" && <Ques3 {...props} />}
            {toggle === "4" && <Ques4 {...props} />}
            {toggle === "5" && <Final />}
          </Form>
        )}
      </Formik>
      <div className={isLoading ? "overlay active" : "overlay"} />
    </div>
  );
};

export default FreeDemo;
