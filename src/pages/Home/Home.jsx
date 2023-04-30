import React from "react";

import Header from "../shared/Header";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
const Home = () => {
  return (
    <div className="">
      <Header />
      <Slider>
        <Banner></Banner>
      </Slider>
    </div>
  );
};

export default Home;
