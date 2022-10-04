import Image from 'next/image';
import React from 'react';
import Login from '../components/Authentication/login';
import Footer from '../components/Shared/footer';
import NavBar from '../components/Shared/navBar';
export default function login() {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex items-center bg-[url('https://i.ibb.co/CV2Ht22/pexels-tim-mossholder-3612932.jpg')] bg-opacity-50 bg-cover bg-no-repeat">
        <div className="w-4/5 sm:w-3/5 h-fit sm:h-3/4 grid gap-0 grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mx-auto rounded-lg">
          <div className="bg-[url('https://i.ibb.co/0Ff2R6y/Sprinkle.png')] bg-cover bg-no-repeat flex rounded-t-2xl sm:rounded-none">
            <h2 className="text-6xl font-extrabold text-gray-800 mx-auto p-12 self-center block">
              Hello! <br /> Lets get the best out of Pharmaz!
            </h2>
          </div>
          <div className="flex items-center bg-slate-100 rounded-b-2xl sm:rounded-none">
            <Login></Login>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
