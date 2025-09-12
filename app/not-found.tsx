"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6 pb-20">
        {/* Background Accent */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 via-purple-50 to-pink-100" />

        {/* Inline SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-72 h-72 mb-6 text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="w-full h-full"
            fill="currentColor"
          >
            <circle cx="250" cy="250" r="200" className="fill-blue-100" />
            <path
              d="M180 300 L220 220 L260 300"
              stroke="currentColor"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="180" cy="180" r="12" className="fill-current" />
            <circle cx="320" cy="180" r="12" className="fill-current" />
            <path
              d="M200 340 Q250 380 300 340"
              stroke="currentColor"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Animated Number */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-extrabold text-gray-800 drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl"
        >
          Oops! Halaman yang kamu cari tidak ditemukan.  
          Coba kembali ke beranda untuk melanjutkan.
        </motion.p>

        {/* Button Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
