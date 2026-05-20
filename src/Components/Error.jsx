import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  return (
    <>
    <Navbar/>
    <section className="py-36 flex flex-col justify-center items-center gap-6">
      <img src="error.svg" alt="error" className="w-auto h-80" />
      <p className="text-gray-500 text-2xl mt-4">Page Not Found</p>
      <NavLink to="/">
        <button className="mt-8 bg-teal-700 hover:bg-white active:bg-teal-800 hover:text-teal-700 text-white hover:outline-1 text-lg font-semibold px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          Go Back Home
        </button>
      </NavLink>
    </section>
    <Footer/>
    </>
  );
};

export default Error;