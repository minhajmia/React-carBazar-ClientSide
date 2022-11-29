import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrder/MyOrders";
import MyProduct from "../../Pages/Dashboard/Myproduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Buyers from "../../Pages/Dashboard/Users/Buyers/Buyers";
import Sellers from "../../Pages/Dashboard/Users/Sellers/Sellers";
import Users from "../../Pages/Dashboard/Users/Users";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
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
      { path: "about", element: <About /> },
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
      {
        path: "/dashboard/dashboard/sellers",
        element: (
          <AdminRoute>
            <Sellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/dashboard/buyers",
        element: (
          <AdminRoute>
            <Buyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/dashboard/myOrders/:id",
        element: (
          <BuyerRoute>
            <Payment />
          </BuyerRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },

      {
        path: "/dashboard/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProduct />
          </SellerRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
