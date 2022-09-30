import React, { useState } from "react";
import { handleSignUp } from "./authManager";
import GoogleAuthProvider from "./AuthProviders/google";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const  [tempPassword, setTempPassword]= useState('');
  const [password, setPassword] = useState("");

  // const checkPassword = (e:any) =>{
  //   if(e.target.value === tempPassword){
  //     setPassword(e.target.value);
  //   } else{
  //     alert('Passwords do not match, try again');
  //   }
  // }

  return (
    <div className="p-5 w-96 mx-auto my-auto border border-2 border-gray-300">
      <div className="mb-2">
        <label className="block mb-2 text-md font-medium dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
          className="bg-gray-100 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-2 text-md font-medium dark:text-gray-300">
          Email
        </label>
        <input
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          className="bg-gray-100 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-2 text-md font-medium dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="bg-gray-100 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      {/* <div className="mb-2">
          <label className="block mb-2 text-md font-medium dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            required
            onBlur={(e) => checkPassword(e)}
            placeholder="confirm password"
            className="bg-gray-100 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div> */}
      <div>
        <button
          className="mt-3 py-2 px-5 bg-green-700 text-white w-full rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => handleSignUp(name, email, password)}
        >
          Create Account
        </button>
      </div>
      <div className="flex">
        <p className="text-gray-500 mx-auto">or</p>
      </div>
      <GoogleAuthProvider />
    </div>
  );
}
