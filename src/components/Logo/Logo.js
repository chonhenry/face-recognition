import React from "react";
import Tilt from "react-tilt";
import logo from "./icon(white).png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="center ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 50 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img src={logo} alt="logo"></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
