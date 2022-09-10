import React, { useState } from 'react';
import { handleSignUp } from './authManager';
import GoogleAuthProvider from './AuthProviders/google';
export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleSignUp(name, email, password)}>
          SignUp
        </button>
      </div>
      or
      <GoogleAuthProvider />
    </div>
  );
}
