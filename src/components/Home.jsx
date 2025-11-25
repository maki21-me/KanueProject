import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HomeImage from "../assets/Images/i.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.img
        src={HomeImage}
        alt="Restaurant"
        className="w-full h-full object-cover object-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">

        {/* Title */}
        <motion.h1
          className="font-logo text-5xl sm:text-6xl text-primary drop-shadow-xl tracking-wider italic mb-4"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Canoe Cafe and Restaurant
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white sm:text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Experience modern and traditional dishes — a place to refresh,
          relax, and enjoy unforgettable flavors.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/book-order")}
            className="bg-gradient-to-r from-[#d4af37] to-[#8B4513] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Table
          </button>

          <a
            href="/#menu"
            className="bg-white text-[#8B4513] px-6 py-3 rounded-full shadow-lg hover:bg-[#8B4513] hover:text-white transition-colors duration-300"
          >
            View Menu
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
