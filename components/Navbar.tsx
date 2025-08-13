"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "@/public/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About Us", "Services", "Gallery", "News"];

  return (
    <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src={logoImage}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="font-bold text-lg text-gray-800 tracking-wide">
            ABUJAPI
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative hover:text-green-600 transition-colors duration-300 
                         after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 after:left-0 after:-bottom-1 
                         hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Us - Desktop */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 
                       shadow-md transition-transform duration-300 hover:scale-105"
          >
            Contact Us →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-green-600 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all duration-300 text-center shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us →
          </a>
        </nav>
      </div>
    </header>
  );
}
