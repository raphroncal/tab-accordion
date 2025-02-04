"use client";

import React, {useState} from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-8 py-4 border-b">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-black font-bold text-lg">Website</div>

        {/* Burger Icon */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <div className="space-y-1.5">
            <div className="w-8 h-1 bg-gray-400 rounded-sm"></div>
            <div className="w-8 h-1 bg-gray-400 rounded-sm"></div>
            <div className="w-8 h-1 bg-gray-400 rounded-sm"></div>
          </div>
        </div>

        {/* Nav Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-100 text-black lg:flex lg:top-0  lg:space-x-8 lg:space-y-0 lg:relative lg:bg-transparent lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="px-8 py-4 border-b lg:border-none">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="px-8 py-4 border-b lg:border-none">
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li className="px-8 py-4 border-b lg:border-none">
            <a href="/services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li className="px-8 py-4 border-b lg:border-none">
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
