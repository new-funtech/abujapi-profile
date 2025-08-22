"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from "next/head";
import { BsEnvelopeFill, BsSendFill } from "react-icons/bs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert({ show: true, message: "Sedang dalam pengembangan!" });
    setTimeout(() => setAlert({ show: false, message: "" }), 3000); // Hide after 3 seconds
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* SEO Metadata */}
      <Head>
        <title>Kontak Kami</title>
        <meta
          name="description"
          content="Hubungi BPD ABUJAPI Jabar melalui formulir kontak atau kunjungi lokasi kami."
        />
      </Head>

      {/* Header: Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Subheader: Breadcrumb Navigation */}
        <section className="bg-gray-100 py-4">
          <div className="max-w-screen-2xl mx-auto px-6">
            <nav
              className="text-sm text-gray-600 font-medium flex items-center mx-22"
              aria-label="Breadcrumb"
            >
              <span className="text-gray-600 mr-2" aria-label="Bookmark Kontak">
                <BsEnvelopeFill className="w-4 h-4" />
              </span>
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-green-600 transition-colors duration-300"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link
                    href="/profil"
                    className="hover:text-green-600 transition-colors duration-300"
                  >
                    Profil
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <span
                    className="text-green-600 font-semibold"
                    aria-current="page"
                  >
                    Kontak
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Main Content: Contact Section */}
        <div className="max-w-screen-2xl px-6 py-8 mx-4 md:mx-30">
          <section>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-2 max-w-5xl mx-auto"
            >
              <BsEnvelopeFill className="w-6 h-6 mr-2 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Kontak Kami</h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-gray-600 mb-8 max-w-5xl mx-auto"
            >
              Hubungi kami untuk informasi lebih lanjut atau kirim pesan Anda
              melalui formulir di bawah ini.
            </motion.p>

            {/* Alert */}
            {alert.show && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow-md"
                role="alert"
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-medium">{alert.message}</p>
                </div>
              </motion.div>
            )}

            {/* Outer Box Wrapping Two Columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-md shadow-md max-w-5xl mx-auto"
            >
              {/* Two Columns: Map and Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1: Map */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[400px] rounded-md shadow-md overflow-hidden"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.80342761477064!3d-6.593054995245974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMzUuMCJTIDEwNsKwNDgnMTIuMyJF!5e0!3m2!1sen!2sid!4v1634567891234!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Lokasi BPD ABUJAPI Jabar"
                  ></iframe>
                </motion.div>

                {/* Column 2: Form Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-md shadow-md"
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400 text-black"
                        placeholder="Masukkan Nama"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400 text-black"
                        placeholder="Masukkan Email"
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400 text-black"
                        placeholder="Masukkan Pesan"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <BsSendFill className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
