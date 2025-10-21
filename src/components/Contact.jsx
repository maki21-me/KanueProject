import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BackgroundImage from "../assets/Images/bookorder.jpg"; // ✅ Add your own image here

export default function Contact() {
  return (
    <section id="contact" className="text-gray-800 dark:text-white">
      {/* ===== Hero Section ===== */}
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            We’d love to hear from you whether it’s feedback, bookings, or just to say hi!
          </p>
        </div>
      </div>

      {/* ===== Contact Section (below hero) ===== */}
      <div className="bg-[#f9f4f0] dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-primary mb-4">Visit Us</h3>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p>Canoe Café and Restaurant, Kebele 8, Bahir Dar, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p>+251 912 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p>info@canoecafeandrestaurant.com</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  Send Us a Message
                </h3>

                <div className="mb-5">
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-full hover:opacity-90 shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* ===== Map Section ===== */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-primary text-center mb-6">
              Find Us
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                title="Canoe Café Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.611794725259!2d37.394408935320975!3d11.594594469916078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cf0078560e9f%3A0xc6525f986079f53f!2sCanoe%20cafe%20and%20restaurant!5e0!3m2!1sen!2set!4v1760939048891!5m2!1sen!2set"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
