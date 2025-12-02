import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhone,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import BackgroundImage from "../assets/Images/bookorder.jpg";

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
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden text-white pt-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Floating glow circles */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-reverse"></div>

      {/* Form container */}
      <div className="relative z-10 w-[90%] max-w-2xl bg-white/10 backdrop-blur-lg border border-[#d4af37]/40 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.3)] p-10 animate-fadeInUp">
        <h1 className="text-4xl font-extrabold text-center mb-4 shimmer-gold">
          Book Your Table
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Enjoy a golden time at{" "}
          <span className="font-semibold text-[#d4af37]">
            Canoe Cafe and Restaurant
          </span>
          . Make your reservation now.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid sm:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              icon={<FaUser />}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <InputField
              label="Phone"
              icon={<FaPhone />}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+251 912 345 678"
            />
          </div>

          {/* Date & Time */}
          <div className="grid sm:grid-cols-2 gap-6">
            <InputField
              label="Date"
              icon={<FaCalendarAlt />}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <InputField
              label="Time"
              icon={<FaClock />}
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          {/* Guests */}
          <InputField
            label="Guests"
            icon={<FaUsers />}
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="e.g. 2"
          />

          {/* Order Details */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">
              <FaUtensils className="inline mr-2 text-[#d4af37]" /> Special Request 
            </label>
            <textarea
              name="orderDetails"
              value={formData.orderDetails}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 
              focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none 
              text-white placeholder-gray-400 transition duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              placeholder="Any special requests or dishes..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#d4af37] hover:bg-[#c19b2f] text-black font-semibold 
            transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.6)] 
            hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] animate-pulse-slow"
          >
            Confirm Reservation
          </button>
        </form>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(20px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes float-reverse {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(30px) translateX(-20px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }

          .animate-float-reverse {
            animation: float-reverse 8s ease-in-out infinite;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease-out forwards;
          }

          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: 200px 0; }
          }

          .shimmer-gold {
            background: linear-gradient(90deg, #d4af37, #fff8dc, #d4af37);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

/* Reusable input field component */
function InputField({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-200">
        <span className="inline-block mr-2 text-[#d4af37]">{icon}</span>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 rounded-md bg-black/30 border border-[#d4af37]/40 
        focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none text-white 
        placeholder-gray-400 transition duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        placeholder={placeholder}
      />
    </div>
  );
}
