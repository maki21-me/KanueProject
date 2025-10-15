import React, { useState } from "react";
import { Link } from "react-router-dom"; // ADD THIS IMPORT
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ handleOrderPopup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const Menu = [
    { id: 1, name: "Home", link: "/" }, // CHANGED from "/#" to "/"
    { id: 2, name: "Menu", link: "/menu" }, // CHANGED from "/#services" to "/menu"
    { id: 3, name: "About Us", link: "/about", isDropdown: true }, // CHANGED
    { id: 4, name: "Admin Portal", link: "/admin" }, // CHANGED
    { id: 5, name: "Contact", link: "/contact" }, // CHANGED
  ];

  const DropdownLinks = [
    { id: 1, name: "Story", link: "/story" },
    { id: 2, name: "Entertainment", link: "/entertainment" },
    { id: 3, name: "Testimonials", link: "/testimonials" },
  ];

  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-50">
      <div className="container py-3 sm:py-0 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-logo text-3xl sm:text-4xl text-primary drop-shadow-xl tracking-wider italic"
        >
          {" "}
          {/* CHANGED to Link */}
          Kanue
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {Menu.map((menu) => {
              if (menu.isDropdown) {
                return (
                  <li key={menu.id} className="group relative cursor-pointer">
                    <a
                      href={menu.link}
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      {menu.name}
                      <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                    </a>
                    {/* Dropdown */}
                    <div className="absolute left-0 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                      <ul className="space-y-3">
                        {DropdownLinks.map((data) => (
                          <li key={data.id}>
                            <Link // CHANGED to Link
                              to={data.link}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20 transition-colors duration-300"
                            >
                              {data.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={menu.id}>
                    <Link // CHANGED to Link
                      to={menu.link}
                      className="inline-block py-4 hover:text-primary transition-colors duration-300"
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>

          {/* Book & Order Button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full flex items-center gap-3 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book & Order
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden text-2xl"
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
        {/* X Button at top-right inside menu */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col mt-4 p-5 gap-4">
          {Menu.map((menu) => {
            if (menu.isDropdown) {
              return (
                <li key={menu.id} className="cursor-pointer">
                  {/* About Us Clickable */}
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
                  {/* Show dropdown only if clicked */}
                  {aboutDropdownOpen && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link // CHANGED to Link
                            to={data.link}
                            className="block p-2 rounded-md hover:bg-primary/20 transition-colors duration-300"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={menu.id}>
                  <Link // CHANGED to Link
                    to={menu.link}
                    className="block py-2 font-semibold hover:text-primary transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            }
          })}
          {/* Book & Order Button */}
          <li>
            <button
              onClick={() => {
                handleOrderPopup();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full flex items-center justify-center gap-3 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Book & Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
