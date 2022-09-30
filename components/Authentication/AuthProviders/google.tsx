import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { handleGoogleSignIn } from "../authManager";
export default function GoogleAuthProvider() {
  return (
    <div>
      <button
        className="mt-3 py-2 px-5 bg-orange-700 text-white w-full rounded-md shadow-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleGoogleSignIn}
      >
        <GoogleIcon fontSize="medium" className="pb-1"></GoogleIcon> Continue With Google
      </button>
    </div>
  );
}
