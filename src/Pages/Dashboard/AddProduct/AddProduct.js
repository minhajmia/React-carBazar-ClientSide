import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Context/AuthProvider";
const axios = require("axios");

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  /* CHECK VERIFY SELLER*/
  const { data: sellers = [] } = useQuery({
    queryKey: ["/users/sellers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/sellers/verify/${user?.email}`).then(
        (res) => res.json()
      ),
  });

  /* LOAD ALL CATEGORY*/
  const { data: allCategory = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axios("http://localhost:5000/categories").then((res) => res.json()),
  });
  const navigate = useNavigate();

  /* imgBiBi photo url */
  const imgHostKey = "74136a91f009b23f0b27700320a86c57";

  const { register, handleSubmit } = useForm();
  const handleAddProduct = (data) => {
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
          data.picture = photo;
          let category_id;
          category_id = data.category;

          if (sellers.isVerified) {
            data.seller = true;
          } else {
            data.seller = false;
          }

          const product = {
            ...data,
            email: user?.email,
          };
          fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product added successful");
                navigate("/dashboard/dashboard/myProducts");
              }
            });
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid "
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md ">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="font-semibold">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Original Price
              </label>
              <input
                type="text"
                placeholder="Original Price"
                className="input input-bordered w-full "
                {...register("orginalPrice", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Sale Price
              </label>
              <input
                type="text"
                placeholder=" Sale Price"
                className="input input-bordered w-full "
                {...register("resalePrice", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Year of Use
              </label>
              <input
                type="text"
                placeholder="Year Of Use"
                className="input input-bordered w-full "
                {...register("yearOfUse", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Date
              </label>
              <input
                type="text"
                placeholder="Ex: 2022-07-21"
                className="input input-bordered w-full "
                {...register("postdate", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Seller Name
              </label>
              <input
                type="text"
                placeholder="Seller Name"
                className="input input-bordered w-full "
                {...register("sellerName", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Product Status
              </label>
              <select
                {...register("productStatus", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full "
                {...register("phone", { required: true })}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Location
              </label>
              <select
                {...register("location", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Mymenshing">Mymenshing</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Barishal">Barishal</option>
                <option value="Khulna">Khulna</option>
                <option value="Rangpur">Rangpur</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                {allCategory &&
                  allCategory.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category?.category}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Description
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm font-semibold">
                Product Photo
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
                name="photo"
                {...register("photo", { required: true })}
              />
            </div>
            <input
              type="submit"
              className="bg-red-500 py-3 rounded-sm font-semibold text-white "
              value="Add Now"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddProduct;
