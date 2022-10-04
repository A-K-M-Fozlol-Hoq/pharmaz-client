import React from 'react';
import Login from '../components/Authentication/login';
import SignUp from '../components/Authentication/signup';
import Footer from '../components/Shared/footer';
import NavBar from '../components/Shared/navBar';
export default function signUp() {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex items-center bg-[url('https://i.ibb.co/Lk12Fd0/guerrillabuzz-crypto-pr-i-WI7-N9x5-NY-unsplash.jpg')] bg-opacity-50 bg-cover bg-no-repeat">
        <div className="w-4/5 sm:w-3/5 h-fit sm:h-3/4 grid gap-0 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1 mx-auto rounded-3xl">
          <div className="flex items-center bg-slate-100 rounded-2xl sm:rounded-none">
            <SignUp></SignUp>
          </div>
          <div className="bg-[url('https://i.ibb.co/wKwh1TP/Wave.png')] bg-cover bg-no-repeat hidden sm:flex">
            <h2 className="text-6xl font-extrabold text-gray-200 mx-auto p-12 self-center block">
              Sign Up, <br /> And Utilize The Full Potential Of Pharmaz
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
