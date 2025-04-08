import React from "react";
import logo from "../assets/logo.webp";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const linkClass =
    "relative hover:scale-110 transition-transform duration-300 hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300 font-head";

  return (
    <footer className="bg-yellow-400 text-black p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-black">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
        </div>

        {/*  (Navigation Links) */}
        <div className="flex flex-col items-start  space-y-2 text-center text-xl">
          <a href="/" className={linkClass}>
            Home
          </a>
          <a href="/product" className={linkClass}>
            Products
          </a>
          <a href="/cart" className={linkClass}>
            Cart
          </a>
          <a href="/contact" className={linkClass}>
            Contact
          </a>
        </div>

        {/* Address & Contact  */}
        <div className="flex flex-col items-start  md:items-end space-y-2 text-center  md:text-right">
          <p className="text-lg md:text-base flex items-center space-x-2">
            <span>📞</span>
            <span>+91 9865298470</span>
          </p>
          <p className="text-lg md:text-base flex items-center space-x-2">
            <span>📧</span>
            <span>selvamsarbathshop@gmail.com</span>
          </p>
          <a
            href="https://wa.me/919345866691"
            className="text-lg md:text-base flex items-center space-x-2 hover:text-green-500"
          >
            <FaWhatsapp />
            <span>+91 9345866691</span>
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-600 my-4" />

      {/* Copyright Text */}
      <p className="text-center text-sm md:text-base font-semibold">
        © 2025 Selvam Sarbath. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
