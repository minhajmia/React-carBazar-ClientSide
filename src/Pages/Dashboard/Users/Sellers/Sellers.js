import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Sellers = () => {
  /* LOAD ALL SELLER FROM DB */
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["/users/sellers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/sellers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  /* HANDLE DELETE SELLER */
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

  /* HANDLE VERIFY SELLER */
  const handleVerifySeller = (id) => {
    fetch(`http://localhost:5000/seller/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verified successful");
          refetch();
        }
      });
  };
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-5">
        Total Sellers: ( {sellers.length} )
      </h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="capitalize">No.</th>
                <th className="capitalize">Name</th>
                <th className="capitalize">Email</th>
                <th className="capitalize">Role</th>
                <th className="capitalize">Status</th>
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
                      {seller.isVerified ? (
                        <>
                          {" "}
                          <>
                            <button className="btn btn-success rounded-sm border-0 btn-sm text-white">
                              Verified
                            </button>
                          </>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleVerifySeller(seller._id)}
                            className=" btn btn-sm text-white btn-warning  rounded-sm border-0"
                          >
                            Unverified
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteSeller(seller._id)}
                        className="btn bg-red-500 rounded-sm border-0 btn-sm"
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
