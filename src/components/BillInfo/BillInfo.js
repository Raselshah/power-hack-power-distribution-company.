import React, { useEffect, useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useQuery } from "react-query";
import Loading from "../../Hooks/Loading/Loading";

const BillInfo = ({ text }) => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch("http://localhost:5000/bill")
      .then((res) => res.json())
      .then((result) => {
        const count = result.bills;
        const page = Math.ceil(count / 10);
        setPageCount(page);
      });
  }, []);
  const {
    isLoading,
    error,
    data: allBill,
    refetch,
  } = useQuery("bill", () =>
    fetch(`http://localhost:5000/billing-list?page=${page}&count=${size}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) return <Loading />;

  // const onSubmit = (id, data, event) => {
  //   fetch(`http://localhost:5000/update-billing/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json)
  //     .then((result) => {
  //       console.log("success put");
  //     });
  //   event.target.reset();
  // };

  const handleDelete = (id) => {
    const url = `http://localhost:5000/delete-billing/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("delete successfull");
      });
  };
  refetch();

  return (
    <>
      {/* <ModalForm onSubmit={onSubmit} /> */}
      <div className="overflow-x-auto mt-6 w-3/4 mx-auto">
        <table className="table w-full">
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

      <div className="btn-group flex justify-center mt-4 gap-2">
        {[...Array(pageCount).keys()].map((number) => (
          <>
            <button
              onClick={() => setPage(number)}
              className={
                page === number ? "btn-primary btn btn-sm" : "btn btn-sm"
              }
            >
              {number}
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default BillInfo;
