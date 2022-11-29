import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Utilities/Image/1.jpg";

const Banner = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  return (
    <div className="mb-16 ">
      <div className=" text-white bg-black">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400 text-red-500">
                Re-seal Car Ground
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-red-500">Yes,</span>
              </span>{" "}
              Love to your Demand . Choice Your Car
            </h2>
            <p className="text-base  md:text-lg">
              carBazar is a car ground shop. Supplying and resealing used car
              here. Come and choice your car everyday.
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0 ">
        <div className="absolute inset-0 bg-black h-1/2" />
        <div className="relative grid mx-auto overflow-hidden  divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md bg-white ">
          {categories &&
            categories.map((category) => (
              <Link to={`/categories/${category?._id}`}>
                <div
                  key={category._id}
                  className="inline-block p-5 text-center  mx-5 "
                >
                  <div className="flex items-center justify-center w-30 h-30 mx-auto mb-4 rounded-full ">
                    <img src={img1} alt="" />
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                    {category?.category}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
