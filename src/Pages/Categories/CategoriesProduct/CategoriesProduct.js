import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const CategoriesProduct = ({ categoryProduct, setBookingProduct }) => {
  const {
    name,
    orginalPrice,
    location,
    picture,
    postdate,
    resalePrice,
    sellerName,
    yearOfUse,
    seller,
  } = categoryProduct;
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={picture}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-black text-white">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-red-500"> {name}</h3>
            <p className="text-1xl ">
              <span className=" font-bold"> Price :</span> $ {resalePrice}
            </p>
            <p className="text-xs dark:text-gray-400 font-bold ">
              Original Price: $
              <span className="line-through text-red-500"> {orginalPrice}</span>
            </p>
            <p className="text-xs dark:text-gray-400 font-bold ">
              Year of use: <span> {yearOfUse}</span>
            </p>
          </div>
          <div className="dark:text-gray-100">
            <h3>
              <span className="font-semibold">Seller Name</span> : {sellerName}
            </h3>
            <h3>
              <span className="font-semibold">Post Date</span> : {postdate}
            </h3>
            <p>
              <span className="font-semibold">Location</span> : {location}
            </p>
          </div>
          <div className="flex justify-between items-center">
            {!seller === false ? (
              <>
                <input
                  type="checkbox"
                  className="checkbox checkbox-success "
                  checked
                />
              </>
            ) : (
              <>
                {" "}
                <h1>Unverified</h1>
              </>
            )}
            <label
              onClick={() => setBookingProduct(categoryProduct)}
              htmlFor="categoryProductModal"
              className="btn bg-red-500 rounded-sm"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesProduct;
