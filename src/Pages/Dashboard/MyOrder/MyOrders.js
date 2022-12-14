import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: () =>
      fetch(`https://yes-phi-sepia.vercel.app/bookings?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div className=" mt-10">
      <h2 className="text-2xl  font-bold mb-5">
        My Orders ( {orders.length} ){" "}
      </h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={order.photo} alt="car " />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{order.name}</div>
                        <div className="text-sm opacity-50">
                          {order.location}
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{order.product}</p>
                    </td>
                    <td>{order.price}</td>
                    {order.isPaid ? (
                      <>
                        <th>
                          <Link
                            to={`/dashboard/dashboard/myOrders/${order._id}`}
                          >
                            <button className="btn btn-success btn-sm">
                              paid
                            </button>
                          </Link>
                        </th>
                      </>
                    ) : (
                      <>
                        <Link to={`/dashboard/dashboard/myOrders/${order._id}`}>
                          {" "}
                          <span className="btn btn-warning">pay</span>
                        </Link>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
