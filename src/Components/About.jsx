import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-5">
            About Me
          </h1>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug mb-6">
            Passionate Software Engineering Student
            <br className="hidden sm:block" />
            & Dedicated Tutor
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-5">
            I am an undergraduate student pursuing a BS in Software
            Engineering at Abdul Wali Khan University Mardan (AWKUM).
            Alongside my academic journey, I teach students from
            Grade 4 to Grade 12 with a strong focus on concept building
            and academic growth.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            My teaching approach emphasizes clarity, confidence,
            and practical understanding in subjects like Mathematics,
            Physics, Computer Science, and English.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <NavLink to="/qualifications">
              <button className="bg-teal-700 hover:bg-white hover:text-teal-700 border-2 border-teal-700 font-bold text-white px-7 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg">
                View Qualifications
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Education Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-7 hover:shadow-2xl transition duration-300 border-l-4 border-teal-700">

            <h4 className="text-2xl font-bold text-teal-700 mb-4">
              Education
            </h4>

            <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              BS Software Engineering
            </p>

            <p className="text-gray-600">
              Abdul Wali Khan University Mardan (AWKUM)
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Undergraduate Student
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-7 hover:shadow-2xl transition duration-300 border-l-4 border-teal-700">

            <h4 className="text-2xl font-bold text-teal-700 mb-4">
              Teaching Experience
            </h4>

            <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Home & Academy Tuition
            </p>

            <p className="text-gray-600">
              Teaching students from Grade 4 to Grade 12
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Focused on concept building and exam preparation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;