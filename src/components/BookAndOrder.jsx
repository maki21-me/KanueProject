import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhone,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import BackgroundImage from "../assets/Images/bookorder.jpg"; // your image

export default function BookOrder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    orderDetails: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your booking has been submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      orderDetails: "",
    });
  };

  return (
    <section
       className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden pt-16 sm:pt-24"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Glow circles for unusual effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Form container */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-[#d4af37]/40 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.3)] w-[90%] max-w-2xl p-10 mt-4">

        <h1 className="text-4xl font-bold text-center text-[#d4af37] mb-4">
          Book Your Table
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Enjoy a golden night at{" "}
          <span className="font-semibold text-[#d4af37]">
            Canoe Restaurant
          </span>
          . Make your reservation now.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-200">
                <FaUser className="inline mr-2 text-[#d4af37]" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-200">
                <FaPhone className="inline mr-2 text-[#d4af37]" /> Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white placeholder-gray-400"
                placeholder="+251 912 345 678"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-200">
                <FaCalendarAlt className="inline mr-2 text-[#d4af37]" /> Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-200">
                <FaClock className="inline mr-2 text-[#d4af37]" /> Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">
              <FaUsers className="inline mr-2 text-[#d4af37]" /> Guests
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white placeholder-gray-400"
              placeholder="e.g. 2"
            />
          </div>

          {/* Order Details */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">
              <FaUtensils className="inline mr-2 text-[#d4af37]" /> Order Details
            </label>
            <textarea
              name="orderDetails"
              value={formData.orderDetails}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white placeholder-gray-400"
              placeholder="Any special requests or dishes..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#d4af37] hover:bg-[#c19b2f] text-black font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]"
          >
            Confirm Reservation ✨
          </button>
        </form>
      </div>
    </section>
  );
}
