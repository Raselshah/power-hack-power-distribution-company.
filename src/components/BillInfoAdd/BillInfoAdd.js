// import React from "react";
// import { useForm } from "react-hook-form";

// const BillInfoAdd = ({ onSubmit }) => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   //   const onSubmit = (data, event) => {
//   //     fetch(`http://localhost:5000/update-billing/${id}`, {
//   //       method: "PUT",
//   //       headers: {
//   //         "content-type": "application/json",
//   //       },
//   //       body: JSON.stringify(data),
//   //     })
//   //       .then((res) => res.json)
//   //       .then((result) => {
//   //         console.log("success put");
//   //       });
//   //     event.target.reset();
//   //   };

//   return (
//     <div>
//       <input type="checkbox" id="my-modal-6" class="modal-toggle" />
//       <div class="modal modal-bottom sm:modal-middle">
//         <div class="modal-box">
//           <label
//             htmlFor="my-modal-6"
//             className="btn btn-sm btn-circle absolute right-2 top-2"
//           >
//             ✕
//           </label>
//           <h2>Type your Bill information</h2>
//           <form
//             className="flex flex-col justify-center items-center gap-2 mt-3"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <input
//               class="input input-bordered w-full max-w-xs"
//               placeholder="Enter your full name"
//               {...register("userName", { required: true })}
//             />
//             {errors.userName?.type === "required" && "First name is required"}

//             <input
//               class="input input-bordered w-full max-w-xs"
//               placeholder="Enter your email"
//               {...register("userEmail", {
//                 required: true,
//                 pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//               })}
//             />
//             {errors.userEmail && "please provide your valid email"}

//             <input
//               class="input input-bordered w-full max-w-xs"
//               placeholder="Enter your phone number"
//               type="number"
//               {...register("phoneNumber", {
//                 required: true,
//                 minLength: 11,
//                 maxLength: 11,
//               })}
//             />
//             {errors.phoneNumber && "please valid your phone number"}

//             <input
//               class="input input-bordered w-full max-w-xs"
//               placeholder="Enter your amount"
//               type="number"
//               {...register("amount", { required: true })}
//             />
//             {errors.amount && "please enter your amount"}
//             <input
//               className="btn btn-outline w-full max-w-xs"
//               type="submit"
//               value="sub"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillInfoAdd;
