import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "../Cheackout/CheckOut";

const Payment = () => {
  const booking = useLoaderData();
  const { name, location, email, price, phone, product } = booking;

  const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);
  console.log(stripePromise);
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 my-10 md:text-black sm:text-white
    "
    >
      <div className="mt-5">
        <Elements stripe={stripePromise}>
          <CheckOut booking={booking} />
        </Elements>
      </div>
      <div>
        <h3 className="font-semibold">Product Info And Buyer Info</h3>
        <p>Buyer name: {name}</p>
        <p>Buyer email: {email}</p>
        <p>Car name: {product}</p>
        <p>Car price: {price}</p>
      </div>
    </div>
  );
};

export default Payment;
