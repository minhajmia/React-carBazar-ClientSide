import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "../Navbar/Navbar.css";

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
      {user?.uid ? (
        <>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn bg-red-500 text-white  capitalize rounded-sm"
            >
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-black py-5  my-0 px-10">
      <div className="navbar-start p-0 m-0  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-white bg-black custom-menu "
          >
            {menu}
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="flex-shrink-0 w-5 h-5 rounded-full text-white"
        >
          <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
        </svg>
        <a
          href="true"
          className="btn btn-ghost normal-case text-xl font-bold text-white"
        >
          <Link to="/">carBazar</Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex p-0 m-0">
        <ul className={`menu menu-horizontal p-0 text-base-100  `}>{menu}</ul>
      </div>
      <div className="navbar-end p-0 m-0">
        <img
          alt=""
          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
          src={user?.photoURL}
        />
      </div>
      <label
        htmlFor="dashboardDrawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden bg-base-100"
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
