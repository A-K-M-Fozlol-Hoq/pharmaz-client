import Link from "next/link";
import React from "react";
import EmpSignup from "../components/Authentication/empSignup";
const empSignup = () => {
  return (
    <div className="w-full h-screen">
      <section className="block md:flex md:flex-row-reverse">
        <div className="h-32 md:h-screen w-full md:w-3/5 flex bg-[url('https://i.ibb.co/Hrw5XyM/vista-wei-Y0-Jr-AGa-H5-Js-unsplash.jpg')] rounded-b-3xl sm:rounded-l-3xl sm:rounded-r-none">
            <div className="m-auto">
            <p className="text-5xl text-white font-extrabold">Career <Link href={`http://localhost:3000/`}>@Pharmaz</Link></p>
            <p className="text-md text-zinc-100 mt-2">Join any registered store and serve with passion.</p>
            </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-2/5 p-10">
          <EmpSignup></EmpSignup>
        </div>
      </section>
    </div>
  );
};

export default empSignup;
