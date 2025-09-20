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
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6 pb-20 mt-8">
        {/* Enhanced Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50" />
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-40 w-60 h-60 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Modern Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="w-80 h-80 relative">
            {/* Main circle with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-slate-100 shadow-xl" />
            
            {/* 404 Text with modern styling */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-slate-700 bg-clip-text text-transparent">
                404
              </span>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute bottom-12 left-12 w-3 h-3 bg-slate-400 rounded-full animate-pulse" />
            <div className="absolute top-16 left-16 w-2 h-2 bg-blue-300 rounded-full" />
          </div>
        </motion.div>

        {/* Enhanced Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
        >
          Halaman Tidak Ditemukan
        </motion.h1>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mb-8"
        >
          <p className="text-lg text-slate-600 mb-4">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan, dihapus, atau URL yang dimasukkan salah.
          </p>
          <p className="text-slate-500">
            Silakan periksa kembali URL atau kembali ke beranda untuk melanjutkan navigasi.
          </p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Kembali ke Beranda
          </Link>

          <Link
            href="/profil"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
          Lihat Profil
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 max-w-md"
        >
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Halaman Populer:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/berita" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Berita
            </Link>
            <Link href="/profil/keanggotaan" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Keanggotaan
            </Link>
            <Link href="/profil/kontak" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Kontak
            </Link>
            <Link href="/profil/galeri" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Galeri
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
