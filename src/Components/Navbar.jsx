import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className='h-16 bg-teal-700 shadow-lg items-center top-0 z-50 sticky  flex w-full'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* <h1 className='font-medium md:mx-12 md:font-bold md:text-2xl text-xl text-white'>Umar Azlan</h1> */}
          <a href="/">
            <img className='h-20 w-auto' src="/a.png" alt="" />
          </a>

          <nav className='flex md:mx-12 items-center'>
            <ul className=' md:gap-8  hidden md:flex'>

              <li><a href="/#home" className='text-white hover:text-teal-400 transition-all duration-200'>Home</a></li>
              <li><a href="/#about" className='text-white hover:text-teal-400 transition-all duration-200'>About</a></li>
              <li><a href="/#services" className='text-white hover:text-teal-400 transition-all duration-200'>Services</a></li>
              <li><a href="/#fees" className='text-white hover:text-teal-400 transition-all duration-200'>Tuition Fee</a></li>
              <li><a href="/#contact" className='text-white hover:text-teal-400 transition-all duration-200'>Contact</a></li>
            </ul>
          </nav>

          <div className="md:hidden">
  <button
    onClick={handleMenuToggle}
    className="text-white text-3xl focus:outline-none"
  >
    {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
  </button>
</div>
</div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-teal-700 shadow-lg py-4">
          <ul className="flex flex-col items-center gap-6">
            <li><a href="/#home" className="text-white text-lg">Home</a></li>
            <li><a href="/#about" className="text-white text-lg">About</a></li>
            <li><a href="/#services" className="text-white text-lg">Services</a></li>
            <li><a href="/#fees" className="text-white text-lg">Fee Structure</a></li>
            <li><a href="/#contact" className="text-white text-lg">Contact</a></li>
          </ul>
        </div>
      )}

    </header>
  );
};

