import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import BookAndOrder from './components/BookAndOrder.jsx';
import Menu from "./Menu.jsx";
import Admin from "./components/Admin.jsx";
import AdminLogin from "./components/AdminLogin.jsx";

//import AdminPortal from './components/AdminPortal.jsx'

export default function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
          <Route path="/admin-login" element={<AdminLogin />} />{" "}
          {/* ADD THIS */}
          <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/AdminPortal" element={<AdminPortal />} /> */}
        <Route path="/book-order" element={<BookAndOrder />} />
      </Routes>
      <Footer />
    </div>
  )
}

