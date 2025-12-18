import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
    // Save booking info to localStorage
    localStorage.setItem("bookingInfo", JSON.stringify(formData));
    // Navigate to Menu page
    navigate("/menu");
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden text-white pt-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-reverse"></div>

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

          <InputField
            label="Guests"
            icon={<FaUsers />}
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="e.g. 2"
          />

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

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#d4af37] hover:bg-[#c19b2f] text-black font-semibold 
            transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.6)] 
            hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] animate-pulse-slow"
          >
            Select Menu
          </button>
        </form>
      </div>
    </section>
  );
}

// Reusable input component
function InputField({ label, icon, name, value, onChange, placeholder, type = "text" }) {
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
