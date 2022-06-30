import React from "react";
import { MdOutlineUpdate } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useQuery } from "react-query";
import Loading from "../../Hooks/Loading/Loading";
import ModalForm from "../../Hooks/ModalForm/ModalForm";

const BillInfo = () => {
  const {
    isLoading,
    error,
    data: allBill,
    refetch,
  } = useQuery("bill", () =>
    fetch("http://localhost:5000/billing-list").then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  const onSubmit = (id, data, event) => {
    fetch(`http://localhost:5000/update-billing/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((result) => {
        console.log("success put");
      });
    event.target.reset();
  };

  const handleDelete = (id) => {
    const url = `http://localhost:5000/delete-billing/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("delete succsessfull");
      });
  };
  refetch();

  return (
    <>
      <ModalForm onSubmit={onSubmit} />
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
            {allBill.map((bill, index) => (
              <>
                <tr key={index}>
                  <td>{bill._id}</td>
                  <td>{bill.userName}</td>
                  <td>{bill.userEmail}</td>
                  <td>{bill.phoneNumber}</td>
                  <td>$ {bill.amount}</td>
                  <td>
                    <div className="flex gap-x-2">
                      <label
                        for="my-modal-6"
                        onClick={() => onSubmit(bill._id)}
                        title="update"
                        className="text-xl hover:text-green-500 cursor-pointer"
                      >
                        <MdOutlineUpdate />
                      </label>
                      <span
                        onClick={() => handleDelete(bill._id)}
                        title="delete"
                        className="text-xl hover:text-red-500 cursor-pointer"
                      >
                        <TiDeleteOutline />
                      </span>
                    </div>
                  </td>
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
