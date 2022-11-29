import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const Register = () => {
  const { createUser, updateUser, googleSignIn, user } =
    useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const from = location.state?.from?.pathname || "/";

  if (token) {
    toast.success("Registration Successful");
    navigate(from, { replace: true });
  }
  /* USER REGISTER */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* imgBiBi photo url */
  const imgHostKey = "74136a91f009b23f0b27700320a86c57";
  const handleRegister = (data) => {
    console.log(data);
    setRegisterError("");
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const photo = imageData.data.url;
          createUser(data.email, data.password)
            .then((result) => {
              updateUserInfo(data.name, photo, data);
            })
            .catch((error) => {
              console.log(error.message);
              setRegisterError(error.message);
            });
        }
      });
  };
  /* USER UPDATE  INFORMATION*/
  const updateUserInfo = (name, photo, data) => {
    const profile = { displayName: name, photoURL: photo };
    updateUser(profile)
      .then((result) => {
        saveUserToDb(data.name, data.email, data.role);
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  // Save user to Database
  const saveUserToDb = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  /* GOOGLE SING IN */
  const handleGoogleRegister = () => {
    setRegisterError("");
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const name = user.displayName;

        fetch(
          `http://localhost:5000/users/googleLogin?email=${email}&name=${name}`,
          {
            method: "PUT",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setCreatedUserEmail(email);
          });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className=" my-10 w-full mx-auto max-w-md p-3 px-6 space-y-3 rounded-xl  text-black bg-black">
        <h1 className="text-2xl font-bold text-center">Register </h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-white">
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
            <p role="alert" className="text-error">
              {errors.name?.message}
            </p>
          )}
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-white">
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
            <p role="alert" className="text-error">
              {errors.email?.message}
            </p>
          )}
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-white">
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
            <p role="alert" className="text-error">
              {errors.password?.message}
            </p>
          )}
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-white">
              Photo
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              {...register("photo")}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-white">
              Option
            </label>
            <select
              {...register("role", { required: "Option field is required" })}
              className="select select-bordered w-md  lg:w-full bg-white text-black "
              required
            >
              <option value="buyer">Buyer </option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <p role="alert" className="text-red-500">
            {registerError}
          </p>
          <button className="block w-full p-3 text-center rounded-md   text-white bg-red-500">
            Register
          </button>
        </form>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleRegister}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-white"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-white">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline dark:text-gray-100 font-bold mx-3 text-red-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
