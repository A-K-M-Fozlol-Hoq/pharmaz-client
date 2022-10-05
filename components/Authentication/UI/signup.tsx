import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import GoogleAuthProvider from '../AuthProviders/google';

export interface IProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRevealPass: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  setRevealConfirmPass: React.Dispatch<React.SetStateAction<boolean>>;
  validateAndHandleSignUp: Function;
  name: string;
  email: string;
  password: string;
  // userType: string;
  revealPass: boolean;
  revealConfirmPass: boolean;
}

const SignUpUI = (props: IProps) => {
  const {
    setName,
    setEmail,
    setPassword,
    setRevealPass,
    setConfirmPassword,
    setRevealConfirmPass,
    validateAndHandleSignUp,
    name,
    email,
    password,
    revealPass,
    revealConfirmPass,
  } = props;
  return (
    <div className="p-10 sm:p-5 w-96 mx-auto my-auto">
      <div className="mb-2 md:mb-3 text-gray-700">
        <h2 className="text-2xl">Create Your Pharmaz Account</h2>
        <br />
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
            className="bg-gray-200 border border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div className="flex items-center mb-2">
          <div className="w-11/12">
            <label className="block mb-2 text-md font-medium dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type={revealConfirmPass ? 'text' : 'password'}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              // onBlur={(e) => checkPassword(e)}
              placeholder="confirm password"
              className="bg-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <FaEye
            className="text-lg text-gray-500 hover:text-gray-700 mt-6 ml-2 cursor-pointer"
            onClick={() => setRevealConfirmPass(!revealConfirmPass)}
          />
        </div>
        <button
          className="mt-3 py-2 px-5 bg-cyan-600 disabled:opacity-50 disabled:bg-gray-400 text-white w-full rounded-md shadow-md hover:bg-blue-700 disabled:hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          // disabled={disableBtn()}
          onClick={() => validateAndHandleSignUp(name, email, password)}
        >
          Create Account
        </button>
      </div>
      <div className="hidden md:flex">
        <p className=" text-gray-400 mx-auto">or</p>
      </div>

      {/* google auth provider */}
      <GoogleAuthProvider />
      <div className="my-2">
        <p className=" text-gray-500">
          Already have an account?{' '}
          <Link
            href={'/login'}
            className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>

      {/* toast container */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default SignUpUI;
