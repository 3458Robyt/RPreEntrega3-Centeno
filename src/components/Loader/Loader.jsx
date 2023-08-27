import React from "react";
import { SquareLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <SquareLoader color="#fff" />
    </div>
  );
};

export default Loader;