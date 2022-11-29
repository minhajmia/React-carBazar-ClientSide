import React from "react";
import notFound from "../../Utilities/Image/notfound.png";

const NotFound = () => {
  return (
    <div className="text-center my-10">
      <img className="inline-block" src={notFound} alt="" />
      <h1 className="text-3xl font-bold text-red-500">Page Not Found</h1>
    </div>
  );
};

export default NotFound;
