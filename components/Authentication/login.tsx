import React, { useState } from 'react';
import { handleLogin } from './authManager';
import { ToastContainer, toast } from 'react-toastify';
import LoginUI from './UI/login';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsLoggedIn } from '../../store/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [revealPass, setRevealPass] = useState(false);
  const dispatch = useDispatch();

  const disableBtn = () => {
    if (email && password) {
      return false;
    } else {
      return true;
    }
  };

  const isEmailValidFunc = (email: string) => {
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

  const ValidateAndHandleLogin = async (email: string, password: string) => {
    const isEmailValid = isEmailValidFunc(email);
    const isPasswordValid = password.length > 5 && !password.includes(' ');
    if (isEmailValid && isPasswordValid) {
      await handleLogin(email, password, dispatch, login);
    } else {
      toast('Please provide valid credential.', {
        autoClose: 2000,
        type: 'error',
      });
    }
  };

  return (
    <LoginUI
      setEmail={setEmail}
      setPassword={setPassword}
      setRevealPass={setRevealPass}
      email={email}
      password={password}
      revealPass={revealPass}
      ValidateAndHandleLogin={ValidateAndHandleLogin}
    ></LoginUI>
  );
}
