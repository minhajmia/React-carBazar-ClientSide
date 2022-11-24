import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Home from "./../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
export default router;
