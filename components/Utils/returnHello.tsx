import React from "react";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

export default function ReturnHello() {
  if (user) {
    console.log({ user });
    return (
      <div className="p-1 rounded-full bg-green-600 w-fit">
        <p className="text-white">returnHello in</p>
      </div>
    );
  } else {
    return <div className="p-2 rounded-md bg-orange-600 w-fit">
    <p className="text-white">returnHello out</p>
  </div>;
  }
}
