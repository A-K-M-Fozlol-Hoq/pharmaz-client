import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RiHome2Line } from "react-icons/ri";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { SiCountingworkspro } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import ReturnHello from "../Utils/returnHello";

const NavBar = (props: any) => {
  const [userDropdown, setUserDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <nav
        className={`bg-white border-gray-200 flex px-2 sm:px-4 py-1 sm:py-2 backdrop-blur-md ${
          darkMode ? "bg-white/60" : "dark:bg-white/40"
        }`}
      >
        <div className="first flex px-1">
          <span className="self-center antialiased text-xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">
            <Link href={"http://localhost:3000/"}>
              <span>
                Pharm<span className="text-green-700">a</span>
                <span className="text-blue-600">z</span>
              </span>
            </Link>
          </span>
        </div>
        <div className="second flex-1 flex items-center justify-center mx-1 px-1">
          <ul
            className="flex items-center text-xl"
            aria-labelledby="user-menu-button"
          >
            <li>
              <Link href={"http://localhost:3000/"}>
                <button className="block py-2 px-4 text-sm md:font-extrabold antialiased text-gray-700 hover:rounded-lg hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white focus:text-blue-600 cursor-pointer">
                  <RiHome2Line className="text-xl block focus:ring-2 focus:ring-blue-500 md:hidden"></RiHome2Line>
                  <span className="hidden md:block">Home</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <button className="block py-2 px-4 text-sm md:font-extrabold antialiased text-gray-700 hover:rounded-lg hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white focus:text-blue-600 cursor-pointer">
                  <GiPerspectiveDiceSixFacesRandom className="text-xl block focus:ring-2 focus:ring-blue-500 md:hidden"></GiPerspectiveDiceSixFacesRandom>
                  <span className="hidden md:block">About</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"http://localhost:3000/"}>
                <button className="block py-2 px-4 text-sm md:font-extrabold antialiased text-gray-700 hover:rounded-lg hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white focus:text-blue-600 cursor-pointer">
                  <SiCountingworkspro className="text-xl block focus:ring-2 focus:ring-blue-500 md:hidden"></SiCountingworkspro>
                  <span className="hidden md:block">Services</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"http://localhost:3000/"}>
                <button className="block py-2 px-4 text-sm md:font-extrabold antialiased text-gray-700 hover:rounded-lg hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white focus:text-blue-600 cursor-pointer">
                  <MdOutlineConnectWithoutContact className="text-xl justify-self-center block focus:ring-2 focus:ring-blue-500 md:hidden"></MdOutlineConnectWithoutContact>
                  <span className="hidden md:block">Contact</span>
                </button>
              </Link>
            </li>
            <li>
              <MdNotificationsNone className="text-2xl text-gray-700 cursor-pointer transition ease-in-out delay-100 hover:scale-100 hover:text-yellow-500 focus:text-blue-600 duration-200"></MdNotificationsNone>
            </li>
          </ul>
        </div>
        <div className={`third flex items-center justify-center mx-1 px-1`}>
          <div className="flex items-center justify-center">
            {darkMode ? (
              <MdOutlineLightMode
                className="text-xl text-yellow-500 mx-2 hover:rounded-2xl hover:text-yellow-400 cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              ></MdOutlineLightMode>
            ) : (
              <MdNightlight
                className="text-xl text-gray-800 mx-2 hover:rounded-2xl hover:text-sky-900 cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              ></MdNightlight>
            )}
            <button
              className={`${
                props.testLogin ? `flex` : `hidden`
              } items-center justify-center cursor-pointer ${
                userDropdown ? "bg-slate-200" : "bg-gray-300"
              } hover:bg-slate-300 rounded-full`}
              onBlur={() => setUserDropdown(false)}
              onClick={() => setUserDropdown(!userDropdown)}
            >
              <Image
                src={
                  "https://i.ibb.co/728WR8n/73-730482-existing-user-default-avatar.jpg"
                }
                alt="userImage"
                className="rounded-full"
                height={28}
                width={28}
              />
              <BsDot className="text-3xl ml-0 text-green-500"></BsDot>
            </button>
            <div
              className={`${
                props.testLogin ? `hidden` : `flex`
              } bg-blue-500 text-white px-2 sm:px-5 py-1 rounded-md`}
            >
              <Link href={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          userDropdown ? "visible" : "hidden"
        } w-40 border backdrop-blur-md bg-white/80 dark:bg-white/60 shadow-md rounded-xl fixed top-14 right-3 z-40`}
      >
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            UserName
          </span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            email@gmail.com
          </span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
