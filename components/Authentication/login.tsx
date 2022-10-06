import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { handleLogin } from './authManager';
import GoogleAuthProvider from './AuthProviders/google';
import LoginUI from './UI/login';
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
    <LoginUI
      setEmail={setEmail}
      setPassword={setPassword}
      setRevealPass={setRevealPass}
      email={email}
      password={password}
      revealPass={revealPass}
      handleLogin={handleLogin}
    ></LoginUI>
  );
}
