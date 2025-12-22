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
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Visi Misi themed SVG icons */}
          <div className="absolute top-20 left-16 opacity-10">
            <BsEye className="w-16 h-16 text-blue-300" />
          </div>
          <div className="absolute top-32 right-24 opacity-10">
            <BsRocket className="w-12 h-12 text-cyan-300" />
          </div>
          <div className="absolute bottom-20 left-32 opacity-10">
            <svg className="w-14 h-14 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </div>
          <div className="absolute top-40 right-40 opacity-10">
            <svg className="w-10 h-10 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
              <path d="M17 12H15V17H17V12ZM13 7H11V17H13V7ZM9 10H7V17H9V10Z" />
            </svg>
          </div>
          <div className="absolute bottom-32 right-16 opacity-10">
            <svg className="w-8 h-8 text-cyan-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H15.5L19 6.5V9H21Z" />
            </svg>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-blue-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-8">
              <BsEye className="w-4 h-4 mr-2" />
              Visi & Misi
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Visi &</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> Misi</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Arah dan tujuan ABUJAPI dalam membangun industri jasa pengamanan yang profesional dan terpercaya
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Visi Organisasi</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span>Misi Strategis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                <span>Tujuan Bersama</span>
              </div>
            </div>
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
