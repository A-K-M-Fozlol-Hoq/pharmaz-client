import React from 'react';
import { handleGoogleSignIn } from '../authManager';
export default function GoogleAuthProvider() {
  return <div onClick={handleGoogleSignIn}>LOGIN WITH GOOGLE</div>;
}
