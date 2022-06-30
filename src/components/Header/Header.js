import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import Loading from "../../Hooks/Loading/Loading";
const Header = () => {
  const navigate = useNavigate();
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
  // setLogin(true);

  return (
    <div class="navbar bg-gray-400">
      <div class="flex-1">
        <Link to="/">Power-Hack</Link>
      </div>
      <div class="flex-none">
        <h1 class="text-lg font-bold text-sky-500">
          Paid Total: <span>{newAmount}</span>
        </h1>
        <div class="dropdown dropdown-end">
          <label
            onClick={() => navigate("/register")}
            tabindex="0"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
