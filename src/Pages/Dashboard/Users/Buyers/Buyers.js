import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Buyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["/users/buyers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/buyers`).then((res) => res.json()),
  });
  const handleDeleteBuyer = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/buyer/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete Successful");
            refetch();
          }
        });
    }
  };
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
                      <button
                        onClick={() => handleDeleteBuyer(buyer._id)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
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
