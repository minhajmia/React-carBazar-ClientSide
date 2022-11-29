import React from "react";
import { Link } from "react-router-dom";

const SignUpSection = () => {
  return (
    <div>
      <section className="py-6 ">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48 ">
          <h1 className="text-4xl font-bold leading-none text-center">
            <span className="text-red-500 "> Sign up </span> now
          </h1>
          <p className="text-xl font-medium text-center">
            Sing Up firstly and choose your favorite car. carBazar is a
            trustworthy car ground in Bangladesh. Different color, different
            look and cheap price is the key feature of carBazar.
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <Link to="/about">
              <button className="px-8 py-3 text-lg font-semibold rounded  btn btn-outline ">
                {" "}
                Learn more{" "}
              </button>
            </Link>
            <Link to="/register">
              {" "}
              <button className="px-8 py-3 text-lg font-normal border-0 rounded btn-active bg-red-500 btn">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpSection;
