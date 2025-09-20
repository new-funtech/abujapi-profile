"use client";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-green-50/95 via-emerald-50/60 to-green-50/40 border-b border-green-200/40">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2 py-2">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <a
              href="tel:+62123456789"
              className="flex items-center gap-1 text-green-700 hover:text-green-600 transition-colors duration-200"
            >
              <FiPhone className="text-sm sm:text-base flex-shrink-0" />
              <span className="hidden sm:inline">+62 812-3456-789</span>
            </a>
            <span className="hidden sm:block text-green-300">|</span>
            <a
              href="mailto:cs@bpdabujapijabar.or.id"
              className="flex items-center gap-1 text-green-700 hover:text-green-600 transition-colors duration-200"
            >
              <FiMail className="text-sm sm:text-base flex-shrink-0" />
              <span className="hidden sm:inline break-all">cs@bpdabujapijabar.or.id</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white/80 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-200 shadow-sm group"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xs sm:text-[13px] text-green-600 group-hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white/80 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-sm group"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xs sm:text-[13px] text-green-600 group-hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white/80 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-200 shadow-sm group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xs sm:text-[13px] text-green-600 group-hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
