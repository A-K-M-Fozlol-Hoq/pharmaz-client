import React, { useState } from 'react';
import { handleSignUp } from './authManager';
import GoogleAuthProvider from './AuthProviders/google';
import { FaEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [revealPass, setRevealPass] = useState(false);
  const [revealConfirmPass, setRevealConfirmPass] = useState(false);

  const disableBtn = () => {
    if (name && email && password === confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const isEmailValidFunc = (emial: String) => {
    const isValid =
      /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i.test(email);
    if (isValid) {
      return true;
    } else {
      toast('Please enter valid email address', {
        autoClose: 2000,
        type: 'error',
      });
      return false;
    }
  };

  const isNameValidFunc = (name: string) => {
    const length = name.length;
    const isValid = /^[a-z ,.'-]+$/i.test(name);
    if (length > 1) {
      if (isValid) {
        return true;
      } else {
        toast('Please enter valid name.', {
          autoClose: 2000,
          type: 'error',
        });
        return false;
      }
    } else {
      toast('The length of name must be at least 2 characters.', {
        autoClose: 2000,
        type: 'warning',
      });
      return false;
    }
  };

  const isPasswordValidFunc = (password: string) => {
    const length = password.length;
    const hasWhiteSpace = password.includes(' ');
    if (length > 5) {
      if (!hasWhiteSpace) {
        if (password === confirmPassword) {
          return true;
        } else {
          toast('Password is not matching with confirm password.', {
            autoClose: 2000,
            type: 'error',
          });
          return false;
        }
      } else {
        toast("Password should't  contain while space characters.", {
          autoClose: 2000,
          type: 'error',
        });
        return false;
      }
    } else {
      toast('The length of password must be at least 6 characters.', {
        autoClose: 2000,
        type: 'warning',
      });
      return false;
    }
  };

  const validateAndHandleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    const isNameValid = isNameValidFunc(name);
    const isEmailValid = isEmailValidFunc(email);
    const isPasswordValid = isPasswordValidFunc(password);

    if (isNameValid && isEmailValid && isPasswordValid) {
      const result = await handleSignUp(name, email, password);
      console.log(result, 'result');
      // console.log();
    }
    // validate and give error
    //call handleSignUp if user provie right data
    // const result = await handleSignUp(name, email, password);
    // toast('Your purchase has been cancelled, we hope to see you again soon!', {
    //   autoClose: 2000,
    //   type: 'success',
    //   // type: 'warning',
    //   // type: 'error',
    //   // type: 'info',
    // });
    console.log('ok');
  };

  return (
    <div className="p-10 sm:p-5 w-96 mx-auto my-auto">
      <div className="mb-3 text-gray-700">
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
      <div className="flex">
        <p className="text-gray-500 mx-auto">or</p>
      </div>

      {/* google auth provider */}
      <GoogleAuthProvider />

      {/* toast container */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
