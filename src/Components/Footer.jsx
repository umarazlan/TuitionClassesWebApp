import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-center bg-cover bg-[url('/footer-bg-shape.svg')] text-black pt-20 pb-10 px-4 sm:px-6">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Main Hasnain Ahmad
          </h3>

          <p className="text-sm leading-6">
            Undergraduate Student, Tuition Instructor & DIT Instructor
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center sm:justify-start gap-4 text-3xl">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="text-green-600 hover:scale-110 transition" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-blue-600 hover:scale-110 transition" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-red-700 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Call Us
          </h3>

          <p className="mb-2">+92 3103345099</p>
          <p>+92 3255950439</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Tuition Center Location
          </h3>

          <p className="text-sm leading-6">
            Near Zarat Office Muhallah Afzal Abad Nowshera Kalan
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-500 mt-12 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        
        <p className="text-sm">
          @{new Date().getFullYear()} MainTuitionClasses. All Rights Reserved
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
          <p className="cursor-pointer hover:text-teal-700 transition">
            Privacy Policy
          </p>

          <p className="cursor-pointer hover:text-teal-700 transition">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;