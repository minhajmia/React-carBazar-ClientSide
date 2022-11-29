import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOut = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { price } = booking;

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

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[500px] border-1 bg-slate-200 rounded-md py-5 px-3 text-white"
      >
        <CardElement />
        <button
          type="submit"
          className="btn bg-red-500 text-white btn-sm mt-2"
          disabled={!useStripe}
        >
          Pay
        </button>
        {cardError && (
          <>
            <p className="text-1xl text-white">{cardError}</p>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckOut;
