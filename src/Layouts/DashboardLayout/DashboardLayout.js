import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";
import Navbar from "../../Parts/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
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
              <Link to="/dashboard/dashboard/myOrders">My Orders</Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/dashboard/sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/dashboard/buyers">All Buyers</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/dashboard/myProducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
