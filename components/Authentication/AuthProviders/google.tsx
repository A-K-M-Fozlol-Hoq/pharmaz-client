import React from 'react';
import { handleGoogleSignIn } from '../authManager';
import { FaGoogle } from 'react-icons/fa';

export default function GoogleAuthProvider() {
  return (
    <div>
      <button
        className="mt-3 p-3 bg-orange-700 text-white w-full rounded-md shadow-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleGoogleSignIn}
      >
        <span className="flex justify-center">
          <FaGoogle className="mt-1 mr-2" />
          Continue with Google
        </span>
      </button>
    </div>
  );
}
