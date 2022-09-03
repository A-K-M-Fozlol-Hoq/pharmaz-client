import React from 'react';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
const user = auth.currentUser;

export default function ReturnHello() {
  if (user) {
    console.log({ user });
    return <div>returnHello in</div>;
  } else {
    return <div>returnHello out</div>;
  }
}
