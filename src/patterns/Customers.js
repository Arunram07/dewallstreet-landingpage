import React from "react";
import "../style/patterns/customer.scss";

const customer = [
  {
    image: require("../assets/products/bidify.png").default,
  },
  {
    image: require("../assets/products/birdly.png").default,
  },
  {
    image: require("../assets/products/bscgamble.png").default,
  },
  {
    image: require("../assets/products/dockspeed.png").default,
  },
  {
    image: require("../assets/products/egem.png").default,
  },
  {
    image: require("../assets/products/fortunetta.png").default,
  },
  {
    image: require("../assets/products/icryptonft.png").default,
  },
  {
    image: require("../assets/products/mp4nft.png").default,
  },
  {
    image: require("../assets/products/rubyswap.png").default,
  },
  {
    image: require("../assets/products/whirlwind.png").default,
  },
  {
    image: require("../assets/products/whizzo.png").default,
  },
  {
    image: require("../assets/products/codefront.png").default,
  },
  {
    image: require("../assets/products/campfinance.png").default,
  },
  {
    image: require("../assets/products/ngauge.png").default,
  },
  {
    image: require("../assets/products/openshop.png").default,
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
          <img
            key={i}
            src={image.image}
            alt="customer"
            style={{ width: 250, height: 95, objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
