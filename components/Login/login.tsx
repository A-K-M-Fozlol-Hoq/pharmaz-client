import React from 'react';
import { handleGoogleSignIn } from './loginManager';
export default function login() {
  return <div onClick={handleGoogleSignIn}>login</div>;
}
