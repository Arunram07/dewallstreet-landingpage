import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../patterns/NavBar";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 page not found | DeWallStreet</title>
      </Helmet>
      <NavBar />
      <div style={{ display: "grid", placeItems: "center", height: "calc(100vh - 50px)" }}>
        <p className="text_primary_30 mb-20 silverGrad">
          oops! <span className="primeGrad">404 </span> page not found
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
