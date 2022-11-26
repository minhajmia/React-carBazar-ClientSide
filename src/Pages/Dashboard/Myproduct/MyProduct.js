import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const { data: sellerProducts = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/sellerProducts?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="text-2xl  font-bold">My Orders {sellerProducts.length}</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Price</th>
                <th>Product Status</th>
                <th>Product Status</th>
                <th>Advertise </th>
                <th>Delete Action</th>
              </tr>
            </thead>
            <tbody>
              {sellerProducts &&
                sellerProducts.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={product.picture} alt="car " />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>$ {product.resalePrice}</td>
                    <th>
                      <button className="btn btn-accent">Available</button>
                    </th>
                    <th>
                      <button className="btn btn-accent">Sold</button>
                    </th>
                    <th>
                      <button className="btn btn-success">Advertise</button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
