import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Parts/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard/dashboard/sellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/dashboard/buyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/dashboard/myOrders">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
