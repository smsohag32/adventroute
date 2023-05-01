import React from "react";
import Header from "../shared/Header";
import BgParticles from "../../components/bgParticles";

const Login = () => {
  return (
    <div className="">
      <BgParticles />
      <Header />
      <div className="w-full max-w-[1200px] flex items-center min-h-[calc(100vh-200px)] mx-auto ">
        <form className="card-body md:max-w-[50%] mx-auto  bg-green-100 bg-opacity-20 p-10 rounded-md shadow-md">
          <div className="form-control">
            <h4 className="text-center md:text-5xl text-xl font-bold ">
              Please Login !
            </h4>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mr-auto mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
