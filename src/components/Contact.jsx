import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BackgroundImage from "../assets/Images/bookorder.jpg"; // ✅ Replace with your own image

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-center bg-cover bg-no-repeat text-gray-800 dark:text-white"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif italic font-bold text-[#d4af37] mb-2">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you — feedback, bookings, or just a friendly hello!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
              Visit Us
            </h3>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#d4af37] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">Address</h4>
                <p className="text-gray-300">
                  Canoe Café and Restaurant, Kebele 8, Bahir Dar, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#d4af37] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">Phone</h4>
                <p className="text-gray-300">+251 912 345 678</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#d4af37] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">Email</h4>
                <p className="text-gray-300">info@canoecafeandrestorant.com</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
            <form>
              <div className="mb-5">
                <label className="block mb-2 font-medium text-gray-200">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 bg-black/40 text-white border border-[#d4af37]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-gray-200">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-black/40 text-white border border-[#d4af37]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-gray-200">Message</label>
                <textarea
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 bg-black/40 text-white border border-[#d4af37]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#c5a231] text-black font-semibold py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]"
              >
                Send Message ✨
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-[#d4af37] text-center mb-6">
            Find Us
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#d4af37]/40">
            <iframe
              title="Canoe Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.611794725259!2d37.394408935320975!3d11.594594469916078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cf0078560e9f%3A0xc6525f986079f53f!2sCanoe%20cafe%20and%20restaurant!5e0!3m2!1sen!2set!4v1760939048891!5m2!1sen!2set"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
