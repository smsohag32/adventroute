import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRoute, FaSearch } from "react-icons/fa";
const Header = () => {
  const [search, setSearch] = useState(true);
  return (
    <div className="navbar w-full py-4 max-w-[1200px] mx-auto bg-base-100 text-white bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <input type="text"></input>
            <li>
              <a></a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-black">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="mr-5">
          <Link
            className="text-xl text-[#63ab45] items-center font-bold flex gap-1"
            to="/"
          >
            <FaRoute></FaRoute> AdventRoute
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center px-1">
          <input
            type="text"
            placeholder={"Search here....."}
            className="input w-60 mr-2 text-sm  bg-slate-300 bg-opacity-20 h-10 max-w-xs"
          />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Destination
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink to="/allnews">
              News
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="primary-btn" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
