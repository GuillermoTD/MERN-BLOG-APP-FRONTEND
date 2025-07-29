'use client'

import {React,useState} from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// Si quieres añadir un checkbox de "Recordarme", necesitarías importar Checkbox
// import { Checkbox } from 'primereact/checkbox';
// const Login = () => {
//   return (
//     <div className="w-full min-h-[96.8vh] flex flex-col items-center justify-center overflow-hidden absolute top-0 ">
//       <form class="max-w-sm mx-auto">
//         <div class="mb-5">
//           <label
//             for="email"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             id="email"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="name@flowbite.com"
//             required
//           />
//         </div>
//         <div class="mb-5">
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your password
//           </label>
//           <input
//             type="password"
//             id="password"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>
//         <div class="flex items-start mb-5">
//           <div class="flex items-center h-5">
//             <input
//               id="remember"
//               type="checkbox"
//               value=""
//               class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//               required
//             />
//           </div>
//           <label
//             for="remember"
//             class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Remember me
//           </label>
//         </div>
//         <button
//           type="submit"
//           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false); // Para el checkbox opcional

  const handleLogin = () => {
      // Lógica de inicio de sesión aquí
      console.log('Iniciando sesión:', { email, password /*, rememberMe */ });
      // Por ejemplo, enviar estos datos a una API
  };

  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>

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

              {/* Opcional: Checkbox "Recordarme" */}
              {/*
              <div className="flex items-center mb-6">
                  <Checkbox
                      inputId="rememberme"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.checked)}
                      className="mr-2"
                  />
                  <label htmlFor="rememberme" className="text-sm text-gray-700">Remember me</label>
              </div>
              */}

              <Button
                  label="Login"
                  onClick={handleLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              />

              <p className="text-center text-gray-600 text-sm mt-6">
                  Don't have an account?{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                      Sign up now
                  </a>
              </p>
          </div>
      </div>
  );
};

export default Login;
