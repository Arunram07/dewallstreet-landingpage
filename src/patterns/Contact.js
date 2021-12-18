import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import "../style/patterns/contact.scss";

import enter from "../assets/icons/enter.svg";
import loading from "../assets/icons/loading.svg";
import circleUp from "../assets/icons/circleUp.svg";
import circleDown from "../assets/icons/circleDown.svg";
import Button from "../components/Button";

import ques1 from "../assets/icons/ques1.svg";
import ques2 from "../assets/icons/ques2.svg";
import ques3 from "../assets/icons/ques3.svg";
// import ques4 from "../assets/icons/ques4.svg";
import arrowUWhite from "../assets/icons/arrowUpWhite.svg";

const url =
  "https://dewallstreet.us5.list-manage.com/subscribe/post?u=01f6e78003aa1a035a7743ec0&amp;id=1e8caaefdc";

const Contact = ({ status, message, onValidated }) => {
  const [toggle, setToggle] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    firstname: "",
    email: "",
    surname: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email format").required("This field is required"),
    surname: Yup.string().required("This field is required"),
  });

  const handleSubmit = async (values, onSubmitProps) => {
    setIsLoading(true);
    try {
      await onValidated({ EMAIL: values.email, FNAME: values.firstname, LNAME: values.surname });
      setIsLoading(false);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      setToggle("4");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    }
  };

  const Ques = () => {
    return (
      <>
        <div>
          <div className="contact_left">
            <div>
              <p className="mb-20 text_primary_14_W500 silverGrad">Newsletter</p>
              <p className="mb-20 text_primary_24 silverGrad">
                Join our weekly community mailing list
              </p>
              <p className="mb-30 text_secondaryLite_14">
                Sign up to our newsletter to receive product updates, exclusive project ideas, and
                webminars.{" "}
              </p>
              <div className="contact_link">
                <Button
                  variant="secondary"
                  children="Count me in"
                  type="submit"
                  onClick={() => setToggle("1")}
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

  const Ques1 = ({ errors }) => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">First up, what’s your name?</p>
          <Field type="text" placeholder="Type your answer here" name="firstname" />
          <p className="error_input mb-20"> {errors?.firstname}</p>
          <div className="contact_link">
            <Button
              variant="secondary"
              children="Okay"
              type="submit"
              onClick={errors.firstname ? null : () => setToggle("2")}
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
          <p className="mb-20 text_primary_24 silverGrad">And your surname?</p>
          <Field type="text" placeholder="Type your answer here" name="surname" />
          <p className="error_input mb-20"> {errors?.surname}</p>
          <div className="contact_link">
            <Button
              variant="secondary"
              children="Okay"
              type="submit"
              onClick={errors.surname ? null : () => setToggle("3")}
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
          <p className="mb-20 text_primary_24 silverGrad email">
            Great! Now what’s your email address <span className="line"></span>?
          </p>
          <Field type="text" placeholder="Type your answer here" name="email" />
          <p className="error_input mb-20"> {errors?.email}</p>
          <div className="contact_link">
            <button
              type="submit"
              style={{ border: "none", outline: "none", background: "transparent" }}
            >
              <Button variant="secondary" children="Submit" type="submit"></Button>
            </button>
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
                All done you’re on our mailing list
              </p>
              <p className="text_secondaryLite_14">
                Congratulation! We have put you on our weekly mailing list. You will be recieving
                our webminars, project ideas and product updates every monday at 11 AM
              </p>
              <div className="contact_link contact_final" style={{ marginTop: "30px" }}>
                <Button
                  variant="secondary"
                  children="Join with another email"
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
    <div className="contact">
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
            {toggle === "4" && <Final />}
          </Form>
        )}
      </Formik>
      <div className={isLoading ? "overlay active" : "overlay"} />
    </div>
  );
};

const ContactForm = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <Contact
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default ContactForm;
