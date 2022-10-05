import React from 'react';
import { getAuth } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsLoggedIn } from '../../store/userSlice';

const auth = getAuth();
const user = auth.currentUser;

export default function ReturnHello() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn, 'isLoggedIn');
  const handleClick = () => {
    const userData = {
      name: 'fo',
      email: 'df',
      userType: 'df',
      isLoggedIn: true,
    };
    dispatch(login({ userData }));
  };
  if (user) {
    console.log({ user });
    return (
      <div className="p-1 rounded-full bg-green-600 w-fit">
        <p className="text-white">returnHello in</p>
      </div>
    );
  } else {
    return (
      <div className="p-2 rounded-md bg-orange-600 w-fit">
        <p className="text-white">returnHello out</p>
        <button onClick={handleClick}>click to login</button>
      </div>
    );
  }
}
