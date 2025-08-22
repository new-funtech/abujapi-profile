"use client";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full bg-green-700 text-white text-sm border-b border-green-600/40">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-2">
        
        {/* Info Kontak */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="tel:+62123456789"
            className="flex items-center gap-2 hover:text-green-200 transition-colors"
          >
            <FiPhone className="text-base" />
            <span>+62 812-3456-789</span>
          </a>
          <a
            href="mailto:cs@bpdabujapijabar.or.id"
            className="flex items-center gap-2 hover:text-green-200 transition-colors"
          >
            <FiMail className="text-base" />
            <span>cs@bpdabujapijabar.or.id</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
