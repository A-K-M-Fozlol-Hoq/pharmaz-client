import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { handleLogin } from './authManager';
import GoogleAuthProvider from './AuthProviders/google';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [revealPass, setRevealPass] = useState(false);

  const disableBtn = () => {
    if (email && password) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="p-5 w-96 mx-auto my-auto">
      <div className="mb-3 text-gray-700">
        <h2 className="text-2xl">Welcome Again!</h2>
        <br />
        <div className="mb-2">
          <div className="flex items-end">
          <label className="block mb-2 text-md font-medium dark:text-gray-300">
            Email
          </label>
          <p className="block mb-2 text-md font-medium text-sky-600">user</p>
          </div>
          <input
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your name or email"
            className="bg-gray-200 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center mb-2">
          <div className="w-11/12">
            <label className="block mb-2 text-md font-medium dark:text-gray-300">
              Password
            </label>
            <input
              type={revealPass ? 'text' : 'password'}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="bg-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />{' '}
          </div>
          <FaEye
            className="text-lg text-gray-500 hover:text-gray-700 mt-6 ml-2 cursor-pointer"
            onClick={() => setRevealPass(!revealPass)}
          />
        </div>

        <button
          className="mt-3 py-2 px-5 bg-cyan-600 disabled:opacity-50 disabled:bg-gray-400 disabled:hover:bg-gray-400 text-white w-full rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          disabled={disableBtn()}
          onClick={() => handleLogin(email, password)}
        >
          Login
        </button>
      </div>
      <div className="flex">
        <p className="text-gray-500 mx-auto">or</p>
      </div>
      <GoogleAuthProvider />
      <div className="my-2">
        <p className=" text-gray-500">
          Don&apos;t have an account?{' '}
          <Link
            href={'/signup'}
            className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
