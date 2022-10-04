import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h4 className="text-2xl mb-3">
            {" "}
            Get All Your Pharmaceuticals In One Platform
          </h4>
          <p> Stay fit. All day, every day. </p>
        </div>
        <div className="flex items-center justify-center my-10">
            <h2 className="text-4xl font-extrabold antialiased">Pharmaz</h2>
        </div>
        <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">® Pharmaz 2022</p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
