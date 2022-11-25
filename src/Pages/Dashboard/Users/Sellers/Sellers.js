import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const Sellers = () => {
  const { user } = useContext(AuthContext);

  const { data: buyers = [] } = useQuery({
    queryKey: ["/users/buyers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/buyers`).then((res) => res.json()),
  });
  return (
    <div>
      <h3>Sellers</h3>
    </div>
  );
};

export default Sellers;
