import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import logo from "../assets/logo.webp";

const Navbar = ({ cartCount = 2 }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => setToggleMenu((prev) => !prev);

  const navLinkClass =
    "relative font-head hover:scale-110 transition-transform duration-300 hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
      <nav className="relative bg-[#FFE169] text-gray-800 px-4 md:px-12 py-3 z-50">
        {/* Mobile layout */}
        <div className="flex justify-between items-center md:hidden">
          {/* ☰ left */}
          <button onClick={handleToggle} className="text-2xl font-bold">
            ☰
          </button>

          {/* Logo center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center overflow-hidden"
            >
              <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
            </Link>
          </div>

          {/* Cart icon right */}
          <Link to="/cart" className="relative">
            <PiShoppingCartSimpleBold className="w-8 h-8 text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo left */}
          <Link
            to="/"
            className="w-14 h-14 rounded-full bg-black flex items-center justify-center overflow-hidden"
          >
            <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
          </Link>

          {/* Center links */}
          <div className="flex space-x-8 text-lg font-semibold">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>
            <Link to="/product" className={navLinkClass}>
              Products
            </Link>
            <Link to="/cart" className={navLinkClass}>
              Cart
            </Link>
            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* Cart + Buy Now */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative">
              <PiShoppingCartSimpleBold className="w-8 h-8 text-black" />

              {cartCount > 0 ? (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              )}
            </Link>
            <Link
              to={cartCount > 0 ? "/checkout" : "/product"}
              className="bg-black text-[#FFE169] px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {toggleMenu && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-50 flex justify-left">
          <div className="bg-yellow-400 text-black px-5 py-8 space-y-4 text-left shadow-2xl rounded-xl w-full max-w-70">
            <Link
              to="/"
              onClick={handleToggle}
              className="block text-lg font-medium hover:text-yellow-600 transition"
            >
              Home
            </Link>
            <Link
              to="/product"
              onClick={handleToggle}
              className="block text-lg font-medium hover:text-yellow-600 transition"
            >
              Products
            </Link>
            <Link
              to="/cart"
              onClick={handleToggle}
              className="block text-lg font-medium hover:text-yellow-600 transition"
            >
              Cart
            </Link>
            <Link
              to="/contact"
              onClick={handleToggle}
              className="block text-lg font-medium hover:text-yellow-600 transition"
            >
              Contact
            </Link>
            <Link
              to={cartCount > 0 ? "/checkout" : "/product"}
              onClick={handleToggle}
              className="inline-block mt-4 bg-black text-[#FFE169] px-5 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
