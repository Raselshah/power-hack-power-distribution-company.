import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Hooks/Loading/Loading";
const Header = () => {
  const {
    isLoading,
    error,
    data: allBill,
  } = useQuery("bill", () =>
    fetch("http://localhost:5000/billing-list").then((res) => res.json())
  );
  if (isLoading) return <Loading />;
  let newAmount = 0;
  for (let count of allBill) {
    newAmount = parseInt(newAmount) + parseInt(count.amount);
  }
  console.log(newAmount);
  return (
    <div class="navbar bg-gray-400">
      <div class="flex-1">
        <h1>Power-Hack</h1>
      </div>
      <div class="flex-none">
        <h1 class="text-lg font-bold text-sky-500">
          Paid Total: <span>{newAmount}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
