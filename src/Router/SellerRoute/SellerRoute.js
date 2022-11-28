import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useSeller from "../../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return (
      <p className="text-red-500 font-bold text-5xl flex justify-center items-center">
        Loading....
      </p>
    );
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
