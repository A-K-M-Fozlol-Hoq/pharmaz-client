import React, { useState } from 'react';
import { handleSignUp } from './authManager';
import { ToastContainer, toast } from 'react-toastify';
import SignUpUI from './UI/signup';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsLoggedIn } from '../../store/userSlice';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('consumer');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [revealPass, setRevealPass] = useState(false);
  const [revealConfirmPass, setRevealConfirmPass] = useState(false);
  const dispatch = useDispatch();

  const disableBtn = () => {
    if (name && role && email && password === confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const isEmailValidFunc = (email: string) => {
    const isValid =
      /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i.test(email);
    if (isValid) {
      return true;
    } else {
      toast('Please enter valid email address', {
        autoClose: 2000,
        type: 'error',
      });
      return false;
    }
  };

  const isNameValidFunc = (name: string) => {
    const length = name.length;
    const isValid = /^[a-z ,.'-]+$/i.test(name);
    if (length > 1) {
      if (isValid) {
        return true;
      } else {
        toast('Please enter valid name.', {
          autoClose: 2000,
          type: 'error',
        });
        return false;
      }
    } else {
      toast('The length of name must be at least 2 characters.', {
        autoClose: 2000,
        type: 'warning',
      });
      return false;
    }
  };

  const isPasswordValidFunc = (password: string) => {
    const length = password.length;
    const hasWhiteSpace = password.includes(' ');
    if (length > 5) {
      if (!hasWhiteSpace) {
        if (password === confirmPassword) {
          return true;
        } else {
          toast('Password is not matching with confirm password.', {
            autoClose: 2000,
            type: 'error',
          });
          return false;
        }
      } else {
        toast("Password should't  contain while space characters.", {
          autoClose: 2000,
          type: 'error',
        });
        return false;
      }
    } else {
      toast('The length of password must be at least 6 characters.', {
        autoClose: 2000,
        type: 'warning',
      });
      return false;
    }
  };

  const validateAndHandleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    const isNameValid = isNameValidFunc(name);
    const isEmailValid = isEmailValidFunc(email);
    const isPasswordValid = isPasswordValidFunc(password);

    if (isNameValid && isEmailValid && isPasswordValid) {
      const result = await handleSignUp(name, email, password);
      if (result.isSuccess) {
        const userData = {
          name: result.result.name,
          email: result.result.email,
          userType: result.result.userType,
          isLoggedIn: true,
        };
        localStorage.setItem('token', result.token);
        dispatch(login({ userData }));
        toast('Signed in successfully.', {
          autoClose: 2000,
          type: 'success',
        });
      } else {
        localStorage.clear();
        toast('Something went wrong. Please try again.', {
          autoClose: 2000,
          type: 'error',
        });
      }
    }
  };

  return (
    <SignUpUI
      setName={setName}
      setRole={setRole}
      setEmail={setEmail}
      setPassword={setPassword}
      setRevealPass={setRevealPass}
      setConfirmPassword={setConfirmPassword}
      setRevealConfirmPass={setRevealConfirmPass}
      validateAndHandleSignUp={validateAndHandleSignUp}
      disableBtn={disableBtn}
      name={name}
      role={role}
      email={email}
      password={password}
      revealPass={revealPass}
      revealConfirmPass={revealConfirmPass}
    ></SignUpUI>
  );
}
