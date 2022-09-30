import Image from 'next/image';
import React from 'react';
import Login from '../components/Authentication/login';
import Footer from '../components/Shared/footer';
import NavBar from '../components/Shared/navBar';
export default function login() {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex items-center bg-[url('https://i.ibb.co/HzxCqV3/mymind-XUls-F9-LYe-Vk-unsplash.jpg')] bg-opacity-50 bg-cover bg-no-repeat">
        <div className="w-4/5 sm:w-3/5 h-fit sm:h-3/4 grid gap-0 grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mx-auto rounded-3xl">
          <div className="bg-[url('https://i.ibb.co/Cv24yqB/renato-ramos-puma-4-W8-Ow-A3vdy-Q-unsplash.jpg')] bg-cover bg-no-repeat flex">
            <h2 className="text-5xl font-extrabold text-gray-200 mx-auto p-12 backdrop-blur-md self-center block sm:hidden">
              Hello! <br /> Welcome To Pharmaz!
            </h2>
          </div>
          <div className="flex items-center backdrop-blur-sm bg-white/30">
            <Login></Login>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
