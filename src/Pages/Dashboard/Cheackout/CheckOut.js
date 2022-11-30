import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError(" ");
    }
  };

  const handleBooking = (id) => {
    fetch(`https://yes-phi-sepia.vercel.app/booking/payment/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Payment Successful");
          navigate("/dashboard/dashboard/myOrders");
        }
      });
  };
  return (
    <div>
      <div className="border p-5 bg-black text-white rounded-sm">
        <CardElement />
        <button
          onClick={() => handleBooking(booking._id)}
          className="btn bg-red-500 text-white btn-sm mt-2"
        >
          Pay
        </button>
        {cardError && (
          <>
            <p className="text-1xl text-white">{cardError}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
