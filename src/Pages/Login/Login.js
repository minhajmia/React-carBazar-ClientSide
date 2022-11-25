import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "./../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  /* USER LOGIN */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  /* GOOGLE LOGIN */
  const handleGoogleLogin = () => {
    setLoginError("");
    googleLogin(provider)
      .then((result) => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className=" my-10 w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-black">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        novalidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="space-y-1 text-sm">
          <label for="username" className="block dark:text-gray-400">
            Your Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email field is required" })}
            id="username"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-teal-400"
          />
        </div>
        {errors.email && (
          <p role="alert" className="text-error">
            {errors.email?.message}
          </p>
        )}
        <div className="space-y-1 text-sm">
          <label for="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password field is required",
              minLength: {
                value: 8,
                message: "This input must  8 characters",
              },
            })}
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-teal-400"
            required
          />
        </div>
        {errors.password && (
          <p role="alert" className="text-error">
            {errors.password?.message}
          </p>
        )}
        <p role="alert" className="text-red-500">
          {loginError}
        </p>
        <button className="block w-full p-3 text-center rounded-md bg-gray-600 dark:bg-teal-400 text-white">
          Login
        </button>
      </form>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/register"
          className="underline dark:text-gray-100 font-bold mx-3"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
