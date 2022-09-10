import React, { useState } from 'react';
import { handleLogin } from './authManager';
import GoogleAuthProvider from './AuthProviders/google';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleLogin(email, password)}>login</button>
      </div>
      or
      <GoogleAuthProvider />
    </div>
  );
}
