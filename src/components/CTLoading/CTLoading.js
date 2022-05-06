import React from "react";
import Loader from "react-loader-spinner";

const CTLoading = () => {
  return (
    <div
      style={{
        width: "100px",
        lineHeight: "500px",
        margin: "0 auto",
        verticalAlign: "baseline",
      }}
    >
      <Loader type="Oval" color="#426589" />
    </div>
  );
};

export default CTLoading;
