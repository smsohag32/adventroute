import React from "react";
import bg from "../assets/bg/bg-1.jpg";

import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const Slider = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-full absolute top-0 -z-40"
    >
      {children}
    </div>
  );
};

export default Slider;
