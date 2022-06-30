import React from "react";

const SearchField = () => {
  return (
    <div class="navbar bg-gray-400 mt-12 w-3/4 mx-auto rounded-sm">
      <div class="flex-none">
        <h2 class="">Billings</h2>
      </div>
      <div class="flex-1 ml-6">
        <div class="form-control">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search…"
              class="input input-bordered"
            />
            <button class="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex-none">
        <label for="my-modal-6" class="btn btn-sm modal-button">
          Add New Bill
        </label>
      </div>
    </div>
  );
};

export default SearchField;