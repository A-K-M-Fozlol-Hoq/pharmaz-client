import React from "react";
import Login from "../components/Authentication/login";
import SignUp from "../components/Authentication/signup";
export default function signUp() {
  return (
    <div className="h-screen w-full flex items-center bg-[url('https://i.ibb.co/x7pM5Rx/20498320-a8dr-05f3-210816.jpg')] bg-opacity-50 bg-cover bg-no-repeat">
      <div className="grid gap-0 grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
        <div className="h-full w-2/6 bg-white ">
          <SignUp />
        </div>
        <div>
          <h2 className="text-white text-5xl">Join Pharmaz</h2>
        </div>
      </div>
    </div>
  );
}
