"use client";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import newsData from "@utils/newsData";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { BsBookmarksFill, BsNewspaper, BsCalendar3, BsGeoAlt, BsArrowRight, BsClock } from "react-icons/bs";
import Head from "next/head";

export default function NewsPage() {
  const newsList = newsData();
  
  // Animation refs and variants
  const heroRef = useRef(null);
  const newsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isNewsInView = useInView(newsRef, { once: true });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>Berita Terbaru | ABUJAPI Jabar</title>
        <meta
          name="description"
          content="Berita terbaru dan informasi terkini dari BPD ABUJAPI Jawa Barat"
        />
      </Head>

      <Navbar />
       {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-screen-xl mx-auto px-6">
          <nav
            className="text-sm text-gray-600 font-medium flex items-center"
            aria-label="Breadcrumb"
          >
            <BsBookmarksFill className="w-4 h-4 mr-2 text-green-600" />
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
                <span
                  className="text-green-600 font-semibold"
                  aria-current="page"
                >
                  Berita
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 relative overflow-hidden"
      >
        {/* Background SVG Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-10 right-10 w-20 h-20 text-green-200/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM18 6H10V8H18V6ZM18 10H10V12H18V10ZM18 14H10V16H18V14Z"/>
          </svg>
          <svg className="absolute bottom-10 left-10 w-16 h-16 text-emerald-200/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z"/>
          </svg>
          <svg className="absolute top-1/3 right-1/4 w-12 h-12 text-green-300/25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L17 13.74L18.18 20.74L12 17.27L5.82 20.74L7 13.74L2 9L8.91 8.26L12 2Z"/>
          </svg>
          <svg className="absolute bottom-1/4 right-1/5 w-14 h-14 text-emerald-300/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
          </svg>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-emerald-400 rounded-full opacity-50"></div>
          <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-green-200 rounded-full opacity-30"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200 mb-6"
            >
              <BsNewspaper className="w-4 h-4 mr-2" />
              Pusat Informasi
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900">Berita </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">ABUJAPI Jabar</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Informasi terbaru, kegiatan, dan perkembangan BPD ABUJAPI Jawa Barat
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">
                  <span className="text-2xl font-bold text-gray-900">{newsList.length}</span> Artikel
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-medium">Update Terkini</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced News List */}
      <motion.section 
        ref={newsRef}
        initial="hidden"
        animate={isNewsInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="flex-1 max-w-screen-xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Artikel & Berita Terbaru
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Temukan informasi terkini seputar kegiatan dan perkembangan ABUJAPI Jawa Barat
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news, index) => (
            <motion.article
              key={news.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:scale-105"
            >
              {/* Enhanced Image with Overlay */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={news.main_image}
                  alt={news.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* News Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Berita
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {news.title}
                </h2>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <BsCalendar3 className="mr-2 text-green-600 w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <BsGeoAlt className="mr-2 text-emerald-600 w-4 h-4" />
                    <span>{news.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm flex-grow mb-6 line-clamp-3 leading-relaxed">
                  {news.highlights.join(" ")}
                </p>

                <a
                  href={news.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Baca Selengkapnya</span>
                  <BsArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* News Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 text-white text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <BsClock className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">Informasi Terpercaya</h3>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dapatkan berita dan informasi terkini seputar kegiatan BPD ABUJAPI Jawa Barat 
            yang selalu ter-update dan terpercaya
          </p>
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}
