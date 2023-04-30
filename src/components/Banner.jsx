import React from "react";
import CardGallery from "./CardGallery";
const Banner = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto md:flex md:items-center h-full text-white">
      <div className="">
        <h3 className="text-3xl md:text-5xl font-bold uppercase">
          Cox's Bazar
        </h3>
        <p className="max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque
          quod vero doloribus voluptates ducimus amet velit blanditiis culpa
          incidunt, quos enim possimus aut ipsa corporis ex consequatur veniam
          quidem!
        </p>
      </div>

      <div>
        <CardGallery />
      </div>
    </div>
  );
};

export default Banner;
