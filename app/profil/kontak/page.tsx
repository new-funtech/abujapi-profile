"use client";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from "next/head";
import { BsEnvelopeFill, BsSendFill, BsBookmarksFill } from "react-icons/bs";
import Header from "@/components/Header";
import Image from "next/image";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  const heroRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const contactRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isBreadcrumbInView = useInView(breadcrumbRef, {
    once: true,
    margin: "-100px",
  });
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert({ show: true, message: "Sedang dalam pengembangan!" });
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  };

  // Function to handle smooth scrolling to the contact form
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <Header /> */}
      <Head>
        <title>Kontak Kami</title>
        <meta
          name="description"
          content="Hubungi BPD ABUJAPI Jabar melalui formulir kontak atau kunjungi lokasi kami."
        />
      </Head>

      <Navbar />

      {/* Breadcrumb */}
      <motion.section
        ref={breadcrumbRef}
        initial="hidden"
        animate={isBreadcrumbInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="bg-gray-100 py-4"
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <nav
            className="text-sm text-gray-600 font-medium flex items-center"
            aria-label="Breadcrumb"
          >
            <BsBookmarksFill className="w-4 h-4 mr-2" />
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  href="/profil"
                  className="hover:text-green-600 transition-colors"
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
      </motion.section>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        id="contact-hero"
        role="banner"
        className="bg-gray-50 mb-10"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-6 md:py-12">
          <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              Hubungi Kami <br />
              <span className="text-green-600">ABUJAPI Jabar</span>
            </h1>
            <p className="text-gray-600 mb-8 text-base sm:text-lg md:pr-10">
              Kami siap membantu Anda dengan pertanyaan atau informasi yang Anda
              butuhkan. Kirim pesan atau kunjungi kami!
            </p>
            <a
              href="#contact-form"
              onClick={handleScroll} // Add the scroll handler
              className="inline-block bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition-colors text-base sm:text-lg"
            >
              Kirim Pesan
            </a>
          </div>

          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-full max-w-full sm:max-w-lg md:max-w-xl h-80 sm:h-96 md:h-[28rem]">
              <Image
                src="https://storage.ganipedia.xyz/abujapi/assets/cs-2.png"
                alt="ABUJAPI Jabar Contact"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </motion.section>

      <main className="flex-grow">
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={isContactInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-green-600 rounded-tl-[4rem] rounded-tr-[4rem]"
          id="contact-form"
        >
          <div className="max-w-screen-xl px-6 py-12 mx-auto mt-16">
            <div className="flex items-center mb-3">
              <BsEnvelopeFill className="w-7 h-7 mr-3 text-white" />
              <h1 className="text-3xl font-bold text-white">Kontak Kami</h1>
            </div>

            <p className="text-base text-white mb-10 max-w-3xl">
              Hubungi kami untuk informasi lebih lanjut atau kirim pesan melalui
              formulir di bawah ini.
            </p>

            {alert.show && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow"
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

            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full h-[450px] rounded-xl shadow-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.685648607108!2d107.6561402!3d-6.9409299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b2bda8daed%3A0x4744fd94c2dd6e03!2sBPD%20ABUJAPI%20JAWA%20BARAT!5e0!3m2!1sid!2sid!4v1692635523456!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Lokasi BPD ABUJAPI Jabar"
                  ></iframe>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 placeholder-gray-400"
                      placeholder="Masukkan Nama"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 placeholder-gray-400"
                      placeholder="Masukkan Email"
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 placeholder-gray-400"
                      placeholder="Masukkan Pesan"
                    ></textarea>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-5 py-3 rounded-lg shadow-md text-base font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <BsSendFill className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">
                Butuh bantuan lainnya? Kami tetap ada untukmu
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <Link href="https://wa.me/+6282210398227" className="block">
                  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-64 hover:bg-gray-100 transition-colors">
                    <div className="relative w-40 h-40 mb-2">
                      <Image
                        src="https://storage.ganipedia.xyz/abujapi/assets/phone.png"
                        alt="Phone Icon"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Nomor Telepon
                    </h3>
                    <p className="text-gray-600">+62 822 1039 8227</p>
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/abujapi_jabar"
                  className="block"
                >
                  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-64 hover:bg-gray-100 transition-colors">
                    <div className="relative w-40 h-40 mb-2">
                      <Image
                        src="https://storage.ganipedia.xyz/abujapi/assets/sosmed.png"
                        alt="Social Media Icon"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Media Sosial
                    </h3>
                    <p className="text-gray-600">@abujapi_jabar</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
