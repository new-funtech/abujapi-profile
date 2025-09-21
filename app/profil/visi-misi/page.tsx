"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import LatestNews from "@components/LatestNews";
import SearchBar from "@components/SearchBar";
import { BsBookmarksFill, BsEye, BsRocket } from "react-icons/bs";

export default function VisiMisiPage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header: Navbar */}
      <Navbar />

      {/* Hero Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden"
      >
        {/* Clean background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-32 w-64 h-64 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Minimal dot pattern */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-slate-300 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6"
            >
              <BsEye className="w-4 h-4 mr-2" />
              Visi & Misi
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Visi &</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> Misi ABUJAPI</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Arah dan tujuan ABUJAPI dalam membangun industri jasa pengamanan yang profesional dan terpercaya
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow">
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-screen-xl mx-auto px-6">
          <nav
            className="text-sm text-gray-600 font-medium flex items-center"
            aria-label="Breadcrumb"
          >
            <BsBookmarksFill className="w-4 h-4 mr-2 text-blue-600" />
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  href="/profil"
                  className="hover:text-blue-600 transition-colors"
                >
                  Profil
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span
                  className="text-blue-600 font-semibold"
                  aria-current="page"
                >
                  Visi & Misi
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

        {/* Content with Sidebar and Right Column */}
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar pathname={pathname} />

          {/* Main Content */}
          <div className="flex-1 lg:max-w-4xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-8">
                {/* Intro */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <BsEye className="w-6 h-6 mr-3 text-blue-600" />
                    Visi & Misi ABUJAPI
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Asosiasi Badan Usaha Jasa Pengamanan Indonesia (ABUJAPI) berdiri pada tanggal 14 Februari 2006 
                    dengan semangat untuk turut serta berpartisipasi aktif dalam pembangunan nasional, khususnya di bidang jasa pengamanan.
                  </p>
                </div>

                {/* Visi */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <BsEye className="w-4 h-4 text-blue-600" />
                    </div>
                    Visi
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Membantu tugas pokok, fungsi, peran, serta wewenang POLRI dalam mengembangkan kekuatan 
                    dan memberdayakan kualitas pengemban fungsi kepolisian terbatas untuk mewujudkan keamanan 
                    dan ketertiban, guna mendukung terwujudnya iklim usaha jasa pengamanan yang sehat, dinamis, 
                    dan demokratis, khususnya pada bidang usaha jasa pengamanan, demi menyukseskan pembangunan nasional.
                  </p>
                </div>

                {/* Misi */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border-l-4 border-gray-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <BsRocket className="w-4 h-4 text-gray-600" />
                    </div>
                    Misi
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-semibold text-blue-600">1</span>
                      </div>
                      <span className="leading-relaxed">
                        Memperkokoh komunikasi, koordinasi, serta kerjasama yang sinergis dan harmonis di antara 
                        Badan Usaha Jasa Pengamanan secara sehat, bertanggung jawab, dan berdasarkan aturan perundang-undangan.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-semibold text-blue-600">2</span>
                      </div>
                      <span className="leading-relaxed">
                        Meningkatkan dan memberdayakan peran Badan Usaha Jasa Pengamanan dalam mewujudkan postur 
                        petugas Satuan Pengamanan Pengemban Fungsi Kepolisian yang profesional, handal, dan terpercaya.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-semibold text-blue-600">3</span>
                      </div>
                      <span className="leading-relaxed">
                        Memantapkan sinkronisasi kepentingan antara pengguna jasa pengamanan dengan Badan Usaha Jasa Pengamanan, 
                        dalam mewujudkan iklim usaha dan/atau kegiatan yang sehat, dinamis, dan berbasis pada aspek pengamanan 
                        serta ketertiban masyarakat.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-semibold text-blue-600">4</span>
                      </div>
                      <span className="leading-relaxed">
                        Menyalurkan berbagai aspirasi yang konstruktif dari Badan Usaha Jasa Pengamanan Daerah, 
                        untuk mewujudkan sinkronisasi dalam pencapaian tujuan organisasi.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-semibold text-blue-600">5</span>
                      </div>
                      <span className="leading-relaxed">
                        Membantu Pemerintah pada umumnya dan Kepolisian Negara Republik Indonesia khususnya sebagai 
                        mitra kerja dalam menetapkan kualifikasi perusahaan bidang jasa pengamanan dan/atau pengawasan 
                        terhadap kualitas standar peningkatan mutu perusahaan.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Search and News */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-16 space-y-6">
              <SearchBar />
              <LatestNews limit={3} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
