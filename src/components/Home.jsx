import React from 'react'
import HomeImage from '../assets/Images/restaurant.png'

export default  function Home({ handleOrderPopup }) {
  return (
     <section className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={HomeImage}
        alt="Restaurant"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 className="font-logo text-5xl sm:text-6xl text-primary drop-shadow-xl tracking-wider italic mb-4">
          Canoe
        </h1>
        <p className="text-white sm:text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-lg">
          Experience modern and traditional dishes, a place to refresh, relax, and enjoy unforgettable flavors.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleOrderPopup}
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
    </section>
  );
}
