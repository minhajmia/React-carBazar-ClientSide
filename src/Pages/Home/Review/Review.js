import React from "react";

const Review = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="p-8 bg-white border  border-red-500 shadow-xl rounded hover:scale-125 hover:shadow-red-300  ease-out duration-500 ">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase text-red-500">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                weekend
              </a>{" "}
              <span className="text-gray-600">— 1 Feb 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Jingle Bells"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Jingle Bells
            </a>
            <p className="mb-5 text-gray-700">
              Some special car are in the carBazar. I really loved those and i
              also bought one.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Vasile Melinte
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Activist
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-black text-white border rounded   shadow-xl hover:scale-125 hover:shadow-red-300  ease-out duration-500">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase text-red-500">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                holidays
              </a>{" "}
              <span className="text-white">— 15 Nov 2021</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Happy new Year"
              className="inline-block mb-3 text-2xl font-bold leading-5  transition-colors duration-200 hover:text-deep-purple-accent-400 text-white"
            >
              carBazar is unique
            </a>
            <p className="mb-5 ">
              Low price and nice car ground is carBazar. I bought a car from
              here. I still drive that car smoothly .
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semiboldtransition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  John Doe
                </a>
                <p className="text-sm font-medium leading-4 ">Author</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded  border-red-500 shadow-xl hover:scale-125 hover:shadow-red-300  ease-out duration-500">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase text-red-500">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Monthly
              </a>{" "}
              <span className="text-gray-600">— 2 Nov 2022</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Why i love C++"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Why i love carBazar
            </a>
            <p className="mb-5 text-gray-700">
              Beautiful and awesome car ground is carBazar. Anyone can chose
              here to love his car.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Andrew Larkin
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  businessman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
