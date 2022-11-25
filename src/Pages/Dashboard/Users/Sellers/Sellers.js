import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Sellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["/users/sellers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/sellers`).then((res) => res.json()),
  });

  const handleDeleteSeller = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/seller/${id}`, {
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
                      <button
                        onClick={() => handleDeleteSeller(seller._id)}
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

export default Sellers;
