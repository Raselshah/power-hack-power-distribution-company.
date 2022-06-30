import React from "react";

const Header = () => {
  return (
    <div class="navbar bg-gray-400">
      <div class="flex-1">
        <h1>Power-Hack</h1>
      </div>
      <div class="flex-none">
        <h1 class="">
          Paid Total: <span>0</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
