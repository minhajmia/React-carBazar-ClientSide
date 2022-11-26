import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyOrders = () => {
  const { data: orders = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch("http://localhost:5000/bookings").then((res) => res.json()),
  });
  console.log(orders);
  return (
    <div>
      <h2 className="text-2xl  font-bold">My Orders {orders.length}</h2>
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
                    <th>
                      <button className="btn btn-accent">Pay</button>
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

export default MyOrders;
