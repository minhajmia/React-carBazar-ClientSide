import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./../../../Context/AuthProvider";

const BookingModal = ({ bookingProduct, setBookingProduct, refetch }) => {
  const { user } = useContext(AuthContext);
  const {
    name,
    orginalPrice,
    location,
    picture,
    postdate,
    resalePrice,
    sellerName,
    yearOfUse,
  } = bookingProduct;

  // booking product
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.product.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = { name, email, product, price, phone, location };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item is Booked");
          setBookingProduct(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="categoryProductModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="categoryProductModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form action="" onSubmit={handleBooking}>
              <div className="form-control">
                <label htmlFor="" className="font-semibold">
                  Your Name :{" "}
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  name="name"
                  disabled
                />
              </div>
              <div className="form-control mt-2 ">
                <label htmlFor="" className="font-semibold">
                  Your Email :{" "}
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  name="email"
                  disabled
                />
              </div>
              <div className="form-control mt-2 ">
                <label htmlFor="" className="font-semibold">
                  Product Name :{" "}
                </label>
                <input
                  type="text"
                  value={name}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  name="product"
                  disabled
                />
              </div>
              <div className="form-control mt-2 ">
                <label htmlFor="" className="font-semibold">
                  Price :{" "}
                </label>
                <input
                  type="text"
                  value={`$ ${resalePrice}`}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  name="price"
                  disabled
                />
              </div>
              <div className="form-control mt-2 ">
                <label htmlFor="" className="font-semibold">
                  Phone Number :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  name="phone"
                  required
                />
              </div>
              <div className="form-control mt-2 ">
                <label htmlFor="" className="font-semibold">
                  Location :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  name="location"
                  required
                />
              </div>
              <input
                type="submit"
                className="btn my-5 text-center block"
                value="Book Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
