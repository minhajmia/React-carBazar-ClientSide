import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Parts/Footer/Footer";
import Navbar from "../../Parts/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
