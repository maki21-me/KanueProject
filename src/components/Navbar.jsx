import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GiCanoe } from "react-icons/gi"; // Boat logo icon

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Menu", link: "/menu" },
    { id: 3, name: "About Us", link: "/about", isDropdown: true },
    { id: 4, name: "Admin Portal", link: "/admin" },
    { id: 5, name: "Contact", link: "/contact" },
  ];

  const DropdownLinks = [
    { id: 1, name: "Story", link: "/#" },
    { id: 2, name: "Entertainment", link: "/#" },
    { id: 3, name: "Testimonials", link: "/#" },
  ];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="w-full px-6 sm:px-10 py-5 sm:py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <GiCanoe className="text-[#d4af37] text-6xl drop-shadow-md" />
          <span className="font-logo font-bold text-4xl sm:text-5xl text-[#d4af37] drop-shadow-xl tracking-wider italic">
            Canoe
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {Menu.map((menu) =>
              menu.isDropdown ? (
                <li key={menu.id} className="group relative cursor-pointer">
                  <Link
                    to={menu.link}
                    className="flex items-center gap-[2px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {menu.name}
                    <FaCaretDown className="ml-1 transition duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 z-[10] hidden group-hover:block text-black bg-white p-3 shadow-md w-[160px] rounded-md">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            to={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-[#d4af37]/20 transition-colors duration-300"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="py-4 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] after:transition-all after:duration-300 hover:after:w-full hover:text-[#d4af37] transition-all duration-300"
                  >
                    {menu.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Book & Order Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/book-order"
              className="bg-gradient-to-r from-[#d4af37] to-[#8B4513] text-white px-5 py-2 rounded-full flex items-center gap-3 shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Book Table
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-3xl text-[#d4af37]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-[#d4af37]"
          >
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col mt-4 p-5 gap-4">
          {Menu.map((menu) =>
            menu.isDropdown ? (
              <li key={menu.id} className="cursor-pointer">
                <div
                  className="flex justify-between items-center py-2 font-semibold"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                >
                  {menu.name}
                  <FaCaretDown
                    className={`transition-transform duration-300 ${
                      aboutDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {aboutDropdownOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="block p-2 rounded-md hover:bg-[#d4af37]/20 transition-colors duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="block py-2 font-semibold hover:text-[#d4af37] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            )
          )}

          {/* Mobile Book & Order */}
          <li>
            <Link
              to="/book-order"
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#8B4513] text-white px-5 py-2 rounded-full flex items-center justify-center gap-3 shadow-lg hover:brightness-110 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book & Order
              <FaCartShopping className="text-xl drop-shadow-sm" />
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
