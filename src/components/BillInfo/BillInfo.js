import React, { useEffect, useState } from "react";

const BillInfo = () => {
  const [allBill, setAllBill] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllBill(data));
  }, []);

  console.log(allBill);
  return (
    <>
      <div class="overflow-x-auto mt-6 w-3/4 mx-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBill.map((bill) => (
              <>
                <tr>
                  <th>{bill.id}</th>
                  <td>{bill.name}</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Blue</td>
                  <td>Blue</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div class="btn-group flex justify-center mt-4">
        <button class="btn btn-sm">1</button>
        <button class="btn btn-sm btn-active">2</button>
        <button class="btn btn-sm">3</button>
        <button class="btn btn-sm">4</button>
      </div>
    </>
  );
};

export default BillInfo;
