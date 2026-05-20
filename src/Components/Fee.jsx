import React from "react";

const FeeStructure = () => {
  return (
    <section id="fees" className="bg-gray-100 py-20 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          Fee Structure
        </h2>

        <p className="text-gray-600 text-base sm:text-lg">
          Affordable tuition plans for students from Grade 1 to 12
        </p>
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto overflow-x-auto">

        <table className="w-full bg-white rounded overflow-hidden shadow-lg">

          {/* Table Head */}
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="py-4 sm:py-5 px-4 sm:px-6 text-left text-sm sm:text-lg">
                Class Level
              </th>

              <th className="py-4 sm:py-5 px-4 sm:px-6 text-left text-sm sm:text-lg">
                Fee Per Subject
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700">

            <tr className="border-b border-gray-300 hover:bg-gray-200 transition">
              <td className="py-4 sm:py-5 px-4 sm:px-6 font-medium text-sm sm:text-base">
                Class 1 to 4
              </td>

              <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base">
                Rs. 1500
              </td>
            </tr>

            <tr className="border-b border-gray-300 hover:bg-gray-200 transition">
              <td className="py-4 sm:py-5 px-4 sm:px-6 font-medium text-sm sm:text-base">
                Class 5 to 7
              </td>

              <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base">
                Rs. 2000
              </td>
            </tr>

            <tr className="border-b border-gray-300 hover:bg-gray-200 transition">
              <td className="py-4 sm:py-5 px-4 sm:px-6 font-medium text-sm sm:text-base">
                Class 8 to 10
              </td>

              <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base">
                Rs. 3500
              </td>
            </tr>

            <tr className="hover:bg-gray-200 transition">
              <td className="py-4 sm:py-5 px-4 sm:px-6 font-medium text-sm sm:text-base">
                Class 11 to 12
              </td>

              <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base">
                Rs. 5000
              </td>
            </tr>

          </tbody>
        </table>

        <div className="mb-10"></div>
      </div>

    </section>
  );
};

export default FeeStructure;