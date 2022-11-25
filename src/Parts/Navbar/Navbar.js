import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  /* LOG OUT */
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.lo(error);
      });
  };

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a href="true" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        <img
          alt=""
          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
          src={user?.photoURL}
        />
      </div>
      <label
        htmlFor="dashboardDrawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
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
    </div>
  );
};

export default Navbar;
