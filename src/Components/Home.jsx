import React from 'react'

const Home = () => {
  return (
    <section
      id='home'
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-center bg-cover bg-[url('/banner-bg-shape.svg')] px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-2">
              Welcome <span className="text-teal-700">!</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 mt-2">
              To Mian Hasnain Tuition Classes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We offer comprehensive coaching for Classes 4 to 12, ensuring a
              strong foundation and excellent results. Building concepts,
              improving grades, achieving goals.
            </p>
            <a href="/#contact">
              <button className="bg-teal-700 hover:bg-gray-200 hover:text-teal-700 border-2 border-transparent hover:border-teal-700 font-bold text-white px-6 sm:px-8 py-3 rounded-full transition duration-300">
                Register Now
              </button>
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/books.png"
              alt="Books"
              className="w-48 sm:w-64 md:w-full max-w-xs md:max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home