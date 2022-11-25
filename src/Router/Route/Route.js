import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Categories from "../../Pages/Categories/Categories";
import Login from "../../Pages/Login/Login";
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
  { path: "dashboard", element: <DashboardLayout /> },
]);
export default router;
