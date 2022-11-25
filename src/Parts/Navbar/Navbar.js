import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  /* LOG OUT */
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.lo(error);
      });
  };
  return (
    <div className="shadow-lg md:flex justify-between items-center ">
      <div className="md:hidden  " onClick={handleToggle}>
        {toggle ? (
          <XMarkIcon className="h-10 w-10 text-black" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-black" />
        )}
      </div>
      <div className="text-center md:text-left">
        <Link to="/">
          <img src="" alt="" className=" inline-block" />
        </Link>
      </div>
      <ul
        className={`md:flex text-center absolute md:static  items-center bg-white  w-full md:w-auto z-[100]  mr-5   ${
          toggle ? "top-10px" : "top-[-210px]"
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        {user?.uid ? (
          <>
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
            <img
              alt=""
              className="w-12 h-12 rounded-full  "
              src={user?.photoURL}
            />
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
      </ul>
    </div>
  );
};

export default Navbar;
