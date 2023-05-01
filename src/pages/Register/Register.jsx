import React, { useState } from "react";
import Header from "../shared/Header";
import BgParticles from "../../components/bgParticles";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    if (password !== confirm) {
      setError("Your password Not match !!");
    }
  };

  // handle google join
  const handleGoggleJoin = () => {};
  // handle facebook join
  const handleFbJoin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <BgParticles />
      <Header />
      <div className="w-full max-w-[1200px] flex items-center min-h-[calc(100vh-200px)] mx-auto ">
        <form
          onSubmit={handleLogin}
          className="card-body md:max-w-[50%] mx-auto  bg-[#444654] bg-opacity-60 p-10 rounded-md shadow-md"
        >
          <h4 className="text-center md:text-4xl mb-2 text-xl font-bold ">
            Register now !
          </h4>
          <div className="form-control">
            <p className="text-warning transition-all transform duration-200 ms-1 py-1">
              <span className="font-bold"></span>
              {error}
            </p>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <p className="text-warning transition-all transform duration-200 ms-1 py-1">
              <span className="font-bold"></span>
              {error}
            </p>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
              name="confirm"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary">Login</button>
          </div>
          <span className="text-center text-sm">
            Already have an account
            <Link className="link font-medium ms-1 text-[#63ab45]" to="/login">
              Login
            </Link>
          </span>
          <div className="form-control mt-4 px-7">
            <button
              onClick={handleGoggleJoin}
              className="flex btn text-lg items-center justify-evenly w-full"
            >
              <FaGoogle className="text-[#63ab45] text-2xl" /> Continue with
              google
            </button>
          </div>
          <div className="form-control mt-1 px-7">
            <button
              onClick={handleFbJoin}
              className="flex btn px-5 text-lg items-center justify-evenly w-full"
            >
              <FaFacebook className="text-[#63ab45] text-2xl" /> Continue with
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
