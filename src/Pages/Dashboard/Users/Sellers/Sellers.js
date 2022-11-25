import { useQuery } from "@tanstack/react-query";
import React from "react";

const Sellers = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["/users/sellers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/sellers`).then((res) => res.json()),
  });
  return (
    <div>
      <h3 className="text-2xl font-bold">Total Sellers {sellers.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="capitalize">No.</th>
                <th className="capitalize">Name</th>
                <th className="capitalize">Email</th>
                <th className="capitalize">Role</th>
                <th className="capitalize">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers &&
                sellers.map((seller, ind) => (
                  <tr className="hover" key={seller._id}>
                    <th>{ind + 1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>{seller.role}</td>
                    <td>
                      <button className="btn btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
