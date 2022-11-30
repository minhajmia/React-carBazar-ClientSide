import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useBuyer from "../../Hooks/useBuyer";
import useSeller from "../../Hooks/useSeller";
import Navbar from "../../Parts/Navbar/Navbar";
import { PlusIcon, ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import { FaUserNurse } from "react-icons/fa";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  // const [isBuyer] = useBuyer(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile ">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-10">
          <Outlet />
        </div>
        <div className="drawer-side md:bg-black pt-10 text-white">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 ">
            {isBuyer && (
              <>
                <li className=" bg-red-500 rounded-sm text-white mb-3">
                  <Link to="/dashboard/dashboard/myOrders">
                    {" "}
                    <ArrowUturnRightIcon className="h-6 w-6 text-white opacity-100" />{" "}
                    My Orders
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li className=" bg-red-500 rounded-sm text-white mb-3">
                  <Link to="/dashboard/dashboard/sellers">
                    {" "}
                    <FaUserNurse className="h-6 w-6 text-white opacity-100" />
                    All Sellers
                  </Link>
                </li>
                <li className=" bg-red-500 rounded-sm text-white mb-3">
                  <Link to="/dashboard/dashboard/buyers">
                    {" "}
                    <FaUserNurse className="h-6 w-6 text-white opacity-100" />
                    All Buyers
                  </Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li className=" bg-red-500 rounded-sm text-white mb-3">
                  <Link to="/dashboard/dashboard/addProduct">
                    {" "}
                    <PlusIcon className="h-6 w-6 text-white opacity-100" />
                    Add Product
                  </Link>
                </li>

                <li className=" bg-red-500 rounded-sm text-white">
                  <Link to="/dashboard/dashboard/myProducts">
                    {" "}
                    <ArrowUturnRightIcon className="h-6 w-6 text-white opacity-100" />
                    My Products
                  </Link>
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
