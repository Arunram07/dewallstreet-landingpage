import React from "react";
import "../style/patterns/customer.scss";

const customer = [
  {
    image: require("../assets/images/adobe.svg").default,
  },
  {
    image: require("../assets/images/granite.svg").default,
  },
  {
    image: require("../assets/images/discovery.svg").default,
  },
  {
    image: require("../assets/images/symantec.svg").default,
  },
  {
    image: require("../assets/images/kaplan.svg").default,
  },
  {
    image: require("../assets/images/escalon.svg").default,
  },
  {
    image: require("../assets/images/ikea.svg").default,
  },
  {
    image: require("../assets/images/optimizely.svg").default,
  },
  {
    image: require("../assets/images/telefonica.svg").default,
  },
  {
    image: require("../assets/images/ibm.svg").default,
  },
  {
    image: require("../assets/images/deloitte.svg").default,
  },
];

const Customers = () => {
  return (
    <div className="customer">
      <div className="customer_heading">
        <p className="text_primary_24">
          We have been trusted by <span className="primeGrad">50K+</span> customers big and small
        </p>
      </div>
      <div className="customer_details">
        {customer.map((image, i) => (
          <img key={i} src={image.image} alt="customer" />
        ))}
      </div>
    </div>
  );
};

export default Customers;
