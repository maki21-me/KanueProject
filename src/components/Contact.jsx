import React, { useState } from "react";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import bgImage from "../assets/Images/restaurant.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo behaviour: replace with real submission (API) as needed
    alert("Message sent (demo). Thanks — we'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative bg-center bg-cover bg-no-repeat text-gray-800 dark:text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-6 py-20 z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif italic font-bold text-[#d4af37] mb-2">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you — feedback, bookings, or just a friendly
            hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
              Visit Us
            </h3>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />{" "}
                <span>Kebele 8, Bahir Dar</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />{" "}
                <span>+251 900 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />{" "}
                <span>info@kanue.com</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)]"
          >
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
              Send a Message
            </h3>
            <div className="grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="p-3 rounded-md bg-white/20 placeholder:text-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                type="email"
                className="p-3 rounded-md bg-white/20 placeholder:text-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
                className="p-3 rounded-md bg-white/20 placeholder:text-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-max bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform interactive"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
