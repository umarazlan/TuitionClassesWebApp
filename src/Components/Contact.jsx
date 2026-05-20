import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/meedorgz", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      toast.success("Message Sent Successfully!");
      e.target.reset();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="bg-gray-50 shadow-lg rounded-2xl p-5 sm:p-8 w-full max-w-xl sm:max-w-2xl">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Building concepts, Improving grades, Achieving goals.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>

          <input
            name="username"
            required
            autoComplete="off"
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <input
            required
            name="email"
            autoComplete="off"
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            required
            name="address"
            autoComplete="off"
            type="address"
            placeholder="Enter Your Address"
            className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <input
            required
            name="number"
            autoComplete="off"
            type="tel"
            pattern="[0-9]{11}"
            placeholder="03XX-XXXXXXX"
            className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <textarea
            required
            name="message"
            autoComplete="off"
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-gray-100 hover:text-teal-700 border-2 border-transparent hover:border-teal-700 font-semibold text-white py-2.5 sm:py-3 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Register Now
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;