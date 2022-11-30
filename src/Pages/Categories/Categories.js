import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import CategoriesProduct from "./CategoriesProduct/CategoriesProduct";

const Categories = () => {
  const [bookingProduct, setBookingProduct] = useState(null);
  const params = useParams();
  const { data: categoryProducts = [], refetch } = useQuery({
    queryKey: ["id"],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${params.id}`).then((res) =>
        res.json()
      ),
  });

  return (
    <>
      <div>
        {categoryProducts.map((categoryProduct) => (
          <CategoriesProduct
            key={categoryProduct._id}
            categoryProduct={categoryProduct}
            setBookingProduct={setBookingProduct}
          />
        ))}
      </div>
      <div>
        {bookingProduct && (
          <BookingModal
            bookingProduct={bookingProduct}
            setBookingProduct={setBookingProduct}
            refetch={refetch}
          />
        )}
      </div>
      <div className="flex justify-center my-5">
        <Link to="/">
          <button className="btn rounded-sm bg-red-500 border-0 mb-5">
            Go Back to Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Categories;
