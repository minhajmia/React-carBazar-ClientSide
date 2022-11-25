import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrder/MyOrders";
import Buyers from "../../Pages/Dashboard/Users/Buyers/Buyers";
import Sellers from "../../Pages/Dashboard/Users/Sellers/Sellers";
import Users from "../../Pages/Dashboard/Users/Users";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "./../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "/blog", element: <Blog /> },
      { path: "*", element: <NotFound /> },
      {
        path: "categories/:id",
        element: (
          <PrivateRoute>
            <Categories />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/dashboard", element: <Dashboard /> },
      { path: "/dashboard/dashboard/users", element: <Users /> },
      { path: "/dashboard/dashboard/myOrders", element: <MyOrders /> },
      { path: "/dashboard/dashboard/sellers", element: <Sellers /> },
      { path: "/dashboard/dashboard/buyers", element: <Buyers /> },
      { path: "/dashboard/dashboard/myOrders", element: <MyOrders /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
