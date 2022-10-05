import React, { useState } from 'react';
import { handleSignUp } from './authManager';
import GoogleAuthProvider from './AuthProviders/google';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import SignUpUI from './UI/signup';

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
    }
    console.log('ok');
  };
  return (
    <SignUpUI
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      setRevealPass={setRevealPass}
      setConfirmPassword={setConfirmPassword}
      setRevealConfirmPass={setRevealConfirmPass}
      validateAndHandleSignUp={validateAndHandleSignUp}
      name={name}
      email={email}
      password={password}
      revealPass={revealPass}
      revealConfirmPass={revealConfirmPass}
    ></SignUpUI>
  );
}
