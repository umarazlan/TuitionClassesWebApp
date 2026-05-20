import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Qualifications = () => {
  return (
    <section
      id="qualifications"
      className="bg-white py-16 sm:py-20 px-4 sm:px-6 bg-center bg-cover bg-[url('/map.svg')]"
    >

      {/* Heading */}
      <div className="text-center mb-14 sm:mb-16">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 mb-4">
          Qualifications & Skills
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-7">
          My educational background, technical skills, and certifications
          that help me provide quality teaching and guidance to students.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* DIT */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 border-t-4 border-rose-400">

          <FaLaptopCode className="text-4xl sm:text-5xl text-rose-400 mb-5" />

          <h3 className="text-xl sm:text-2xl font-bold text-rose-400 mb-4">
            DIT
          </h3>

          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Completed Diploma in Information Technology with knowledge
            of computer fundamentals and programming basics.
          </p>
        </div>

        {/* HTML */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 border-t-4 border-orange-400">

          <FaHtml5 className="text-4xl sm:text-5xl text-orange-400 mb-5" />

          <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
            HTML
          </h3>

          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Experienced in building structured and semantic web pages
            using HTML5.
          </p>
        </div>

        {/* CSS */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 border-t-4 border-green-500">

          <FaCss3Alt className="text-4xl sm:text-5xl text-green-500 mb-5" />

          <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-4">
            CSS
          </h3>

          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Skilled in responsive layouts, styling, animations,
            and Tailwind CSS.
          </p>
        </div>

        {/* JavaScript */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 border-t-4 border-yellow-500">

          <FaJsSquare className="text-4xl sm:text-5xl text-yellow-500 mb-5" />

          <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">
            JavaScript
          </h3>

          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Knowledge of DOM manipulation, functions, arrays,
            and interactive web development.
          </p>
        </div>

        {/* C++ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 border-t-4 border-purple-700">

          <FaCode className="text-4xl sm:text-5xl text-purple-700 mb-5" />

          <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
            C++ Programming
          </h3>

          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Strong understanding of programming fundamentals,
            OOP, loops, arrays, and problem solving.
          </p>
        </div>

        {/* Teaching */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 border-t-4 border-red-700">

          <FaChalkboardTeacher className="text-4xl sm:text-5xl text-red-700 mb-5" />

          <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Teaching Skills
          </h3>

          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Focused on concept building, student engagement,
            and easy-to-understand teaching methods.
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-14 sm:mt-20">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-2.5 bg-teal-700 hover:bg-white border-2 border-teal-700 hover:text-teal-700 text-white px-5 py-3 rounded-full transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <IoHomeOutline
            size={18}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />

          Back to Home
        </NavLink>
      </div>
    </section>
  );
};

export default Qualifications;