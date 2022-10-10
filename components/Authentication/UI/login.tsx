import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import GoogleAuthProvider from '../AuthProviders/google';

export interface IProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRevealPass: React.Dispatch<React.SetStateAction<boolean>>;
  ValidateAndHandleLogin: Function;
  email: string;
  password: string;
  // userType: string;
  revealPass: boolean;
}

const LoginUI = (props: IProps) => {
  const {
    setEmail,
    setPassword,
    setRevealPass,
    email,
    password,
    revealPass,
    ValidateAndHandleLogin,
  } = props;

  return (
    <div className="p-5 w-96 mx-auto my-auto">
      <div className="mb-3 text-gray-700">
        <div className="flex">
        <h2 className="flex-1 text-2xl">Welcome Again!</h2>
        
        </div>
        <br />
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium dark:text-gray-300">
            Email
          </label>
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
          // disabled={disableBtn()}
          onClick={() => ValidateAndHandleLogin(email, password)}
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
      {/* toast container */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default LoginUI;
