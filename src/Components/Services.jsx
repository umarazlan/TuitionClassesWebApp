import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-white py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-teal-700 mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide high-quality tuition classes for students from
          Grade 4 to Grade 12 with a focus on concept building,
          exam preparation, and academic excellence.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">
            Primary Classes
          </h3>

          <p className="text-gray-600 mb-4">
            Tuition for Grade 4 to Grade 6 students with strong focus on:
          </p>

          <ul className="text-gray-700 space-y-2">
            <li>✔ Mathematics</li>
            <li>✔ English</li>
            <li>✔ Science</li>
            <li>✔ Homework Assistance</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">
            Middle Classes
          </h3>

          <p className="text-gray-600 mb-4">
            Complete preparation for Grade 7 to Grade 9 students.
          </p>

          <ul className="text-gray-700 space-y-2">
            <li>✔ Math & Physics</li>
            <li>✔ Computer Science</li>
            <li>✔ English Grammar</li>
            <li>✔ Weekly Tests</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">
            Board Classes
          </h3>

          <p className="text-gray-600 mb-4">
            Special coaching for Grade 9 to Grade 12 board exams.
          </p>

          <ul className="text-gray-700 space-y-2">
            <li>✔ Physics</li>
            <li>✔ Computer Science</li>
            <li>✔ Mathematics</li>
            <li>✔ Exam Preparation</li>
          </ul>
        </div>

      </div>
<div className="mt-13"></div>
    </section>
  );
};

export default Services;