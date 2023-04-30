import React from "react";
import { Outlet } from "react-router-dom";
import BgParticles from "../components/bgParticles";
import Header from "../pages/shared/Header";
const MainLayout = () => {
  return (
    <>
      <div className="z-50">
        <BgParticles />
      </div>
      <div className="relative w-full h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
