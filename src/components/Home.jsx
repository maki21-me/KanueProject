import React, { useState } from "react";
import HomeImage from "../assets/Images/image.png";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order submitted successfully!");
    setShowForm(false);
    setFormData({ name: "", phone: "", date: "", time: "", guests: "" });
  };

  return (
    <section className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={HomeImage}
        alt="Restaurant"
        className={`w-full h-full object-cover transition-all duration-300 ${
          showForm ? "blur-sm" : ""
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          showForm ? "opacity-50" : "opacity-40"
        }`}
      ></div>

      {/* Hero content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 transition-all duration-300 ${
          showForm ? "blur-sm" : ""
        }`}
      >
        <h1 className="font-logo text-5xl sm:text-6xl text-primary drop-shadow-xl tracking-wider italic mb-4">
          Canoe
        </h1>
        <p className="text-white sm:text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-lg">
          Experience modern and traditional dishes, a place to refresh, relax, and
          enjoy unforgettable flavors.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Table
          </button>
          <a
            href="/#menu"
            className="bg-white text-primary px-6 py-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Small center-left Order Form */}
      {showForm && (
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-80 bg-white p-6 rounded-lg shadow-xl z-20">
          {/* Close button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-primary font-bold text-lg"
            >
              &times;
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-primary">Book Your Table</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors duration-300 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
