import { useQuery } from "@tanstack/react-query";
import React from "react";

const Buyers = () => {
  const { data: buyers = [] } = useQuery({
    queryKey: ["/users/buyers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/buyers`).then((res) => res.json()),
  });
  return (
    <div>
      <h3 className="text-2xl font-bold">Total Buyers {buyers.length}</h3>
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
              {buyers &&
                buyers.map((buyer, ind) => (
                  <tr className="hover" key={buyer._id}>
                    <th>{ind + 1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>{buyer.role}</td>
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

export default Buyers;
