import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useBuyer from "../../Hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();
  if (loading || isBuyerLoading) {
    return (
      <p className="text-red-500 font-bold text-5xl flex justify-center items-center">
        Loading....
      </p>
    );
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;
