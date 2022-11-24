import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className=" my-10 w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-black">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form
        novalidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="space-y-1 text-sm">
          <label for="username" className="block dark:text-gray-400">
            Your Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name field is required" })}
            id="username"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-teal-400"
          />
        </div>
        {errors.name && (
          <p role="alert" class="text-error">
            {errors.name?.message}
          </p>
        )}
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
            required
          />
        </div>
        {errors.email && (
          <p role="alert" class="text-error">
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
          />
        </div>
        {errors.password && (
          <p role="alert" class="text-error">
            {errors.password?.message}
          </p>
        )}
        <div className="space-y-1 text-sm">
          <label for="username" className="block dark:text-gray-400">
            Option
          </label>
          <select
            {...register("role", { required: "Option field is required" })}
            className="select select-bordered w-md  lg:w-full "
            required
          >
            <option value="buyer">Buyer </option>
            <option value="seller">Seller</option>
          </select>
        </div>

        <button className="block w-full p-3 text-center rounded-md bg-gray-600 dark:bg-teal-400 text-white">
          Register
        </button>
      </form>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
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
          to="/login"
          className="underline dark:text-gray-100 font-bold mx-3"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
