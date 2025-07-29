"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import "primereact/resources/themes/lara-light-blue/theme.css"; // O tu tema preferido de PrimeReact
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// const Signin = () => {
//   return (
//     <div className="w-full min-h-[96.8vh] flex flex-col items-center justify-center overflow-hidden absolute top-0 ">
//       <form className="max-w-sm mx-auto ">
//         <div className="border-[1px] border-slate-200 p-[1.9rem] flex flex-col items-center justify-center">
//           {/* Form row */}
//           <div className="flex gap-[5%]">
//             <div className="mb-5">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                 placeholder="name@flowbite.com"
//                 required
//               />
//             </div>

//             <div className="mb-5">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                 placeholder="name@flowbite.com"
//                 required
//               />
//             </div>
//           </div>

//           {/* Form Row */}
//           <div className="flex gap-[5%]">
//             <div className="mb-5">
//               <label
//                 htmlFor="password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Date of Birth
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                 required
//               />
//             </div>

//             <div className="mb-5">
//               <label
//                 htmlFor="password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                 required
//               />
//             </div>
//           </div>

//           {/* Form Row */}
//           <div className="flex gap-[5%]">
//             <div className="mb-5">
//               <label
//                 htmlFor="password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                 required
//               />
//             </div>

//             <div className="mb-5">
//               <label
//                 htmlFor="password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex items-start mb-5">
//             <div className="flex items-center h-5">
//               <input
//                 id="terms"
//                 type="checkbox"
//                 value=""
//                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//                 required
//               />
//             </div>
//             <label
//               htmlFor="terms"
//               className="ms-2 flex flex-col text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               <span className="flex gap-1">
//                 I agree with the{" "}
//                 <a
//                   href="#"
//                   className="text-blue-600 hover:underline dark:text-blue-500"
//                 >
//                   terms and conditions
//                 </a>
//               </span>
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Register new account
//           </button>
//           <div className=" mt-[1rem] text-[0.8rem]">
//             Have you an account?
//             <Link href="/login" className="text-blue-500">
//               Login
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
const Signin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
      // Lógica de registro aquí
      console.log('Registrando:', { name, email, password });
  };

  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>

              <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                  </label>
                  <InputText
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
              </div>

              <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      Email address
                  </label>
                  <InputText
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
              </div>

              <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                  </label>
                  <InputText
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <a href="#" className="text-blue-600 hover:underline text-sm mt-2 block text-right">
                      Forgot password?
                  </a>
              </div>

              <Button
                  label="Register"
                  onClick={handleRegister}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              />

              <p className="text-center text-gray-600 text-sm mt-6">
                  You have an account?{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                      Login now
                  </a>
              </p>
          </div>
      </div>
  );
};
export default Signin;
