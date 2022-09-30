import { Button } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { handleLogin } from "./authManager";
import GoogleAuthProvider from "./AuthProviders/google";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p-5 w-96 mx-auto my-auto">
      <div className="mb-3 text-gray-700">
        <h2 className="text-2xl">Login To Your Account</h2>
        <br />
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium dark:text-gray-300">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your name or email"
            className="bg-gray-100 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-md font-medium dark:text-gray-300">
            Password
          </label>
          <input
            type="your password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-gray-100 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          className="mt-3 py-2 px-5 bg-cyan-600 text-white w-full rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => handleLogin(email, password)}
        >
          Login
        </button>
      </div>
      <div className="flex">
        <p className="text-gray-500 mx-auto">or</p>
      </div>
      <GoogleAuthProvider />
    </div>
  );
}
