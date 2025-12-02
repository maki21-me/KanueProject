import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#fdfaf7] text-[#4a2c23]">

        <div className="container mx-auto px-6 py-14 flex flex-col gap-12">

          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {/* Logo / About */}
            <div>
              <h2 className="text-3xl font-logo italic text-[#4a2c23] mb-4">Canoe</h2>
              <p className="text-sm leading-6 text-[#7a5e52]">
                Experience the true flavor of tradition with our signature dishes made fresh every day.
                A perfect place to dine, relax, and connect.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-[#4a2c23] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="/menu" className="hover:text-primary transition-colors">Menu</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="/admin" className="hover:text-primary transition-colors">Admin Portal</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-[#4a2c23] mb-4">Contact</h3>
              <ul className="space-y-3 text-[#7a5e52]">
                <li className="flex items-center gap-3">
                  <FaLocationArrow className="text-primary" />
                  <span>Kebele 8, Bahir Dar</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-primary" />
                  <span>+251 900 123 456</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-primary" />
                  <span>info@Canoe.com</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-[#4a2c23] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform">
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform">
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform">
                  <FaTwitter className="text-white text-lg" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform">
                  <FaYoutube className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#e2d6ce] pt-6 text-center text-sm text-[#7a5e52]">
            <p>
              © {new Date().getFullYear()} <span className="text-primary font-semibold">Canoe Cafe and Restaurant</span>. All rights reserved.
            </p>
            <p className="mt-1">
              Designed with ❤️ by <span className="text-secondary font-semibold">Smart Girls</span>
            </p>
          </div>
        </div>

      </footer>
    </>
  )
}
