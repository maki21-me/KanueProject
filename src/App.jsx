import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./Menu.jsx";
import Admin from "./components/Admin.jsx";
import AdminLogin from "./components/AdminLogin.jsx";

export default function App() {
  const handleOrderPopup = () => {
    alert("Order feature coming soon!");
  };

  return (
    <Router>
      <div>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin-login" element={<AdminLogin />} />{" "}
          {/* ADD THIS */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
