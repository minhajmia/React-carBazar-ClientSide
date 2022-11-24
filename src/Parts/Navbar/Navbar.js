import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="shadow-lg md:flex justify-between items-center ">
      <div className="md:hidden  " onClick={handleToggle}>
        {toggle ? (
          <XMarkIcon class="h-10 w-10 text-black" />
        ) : (
          <Bars3Icon class="h-10 w-10 text-black" />
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
        {user?.name}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
