"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import LatestNews from "@components/LatestNews";
import SearchBar from "@components/SearchBar";
import { BsBookmarksFill, BsClock, BsRocket, BsPeople, BsBuilding, BsEye } from "react-icons/bs";

export default function SejarahPage() {
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
              <BsClock className="w-4 h-4 mr-2" />
              Sejarah Perusahaan
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Sejarah &</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> Perkembangan ABUJAPI</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Perjalanan ABUJAPI dalam membangun industri jasa pengamanan yang profesional di Indonesia
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
                  Sejarah Perusahaan
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
                    <BsClock className="w-6 h-6 mr-3 text-blue-600" />
                    Sejarah ABUJAPI
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Perjalanan panjang Asosiasi Badan Usaha Jasa Pengamanan Indonesia dalam membangun 
                    industri jasa pengamanan yang profesional dan terpercaya di Indonesia.
                  </p>
                </div>

                {/* Timeline sections */}
                <div className="space-y-8">
                  {/* Pendirian */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <BsBuilding className="w-4 h-4 text-blue-600" />
                      </div>
                      Pendirian ABUJAPI (2006)
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Asosiasi Badan Usaha Jasa Pengamanan Indonesia (ABUJAPI) didirikan pada tanggal 
                      <strong> 14 Februari 2006</strong>. Pendirian organisasi ini dilandasi semangat untuk 
                      menumbuhkembangkan wirausaha, khususnya di bidang jasa pengamanan, sebagai pengemban 
                      fungsi terbatas dari POLRI, yang dikenal sebagai &quot;Mitra Polri&quot; atau Pam Swakarsa.
                    </p>

                  </div>

                  {/* Tujuan dan Sinergi */}
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border-l-4 border-gray-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <BsPeople className="w-4 h-4 text-gray-600" />
                      </div>
                      Tujuan dan Sinergi
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Para pendiri ABUJAPI, yang mayoritas merupakan pelaku Badan Usaha Jasa Pengamanan (BUJP), 
                      bertujuan untuk mensinergikan kepentingan dan tujuan yang sama, yaitu menghimpun, membina, 
                      dan mengembangkan kemampuan, kegiatan, serta kepentingan usaha yang tangguh dan profesional. 
                      ABUJAPI menjadi wadah untuk menyalurkan kegiatan dan pengembangan anggota BUJP guna 
                      mewujudkan lingkungan yang aman dan tertib.
                    </p>
                  </div>

                  {/* Visi dan Misi Organisasi */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <BsEye className="w-4 h-4 text-green-600" />
                      </div>
                      Visi dan Misi Organisasi
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Berangkat dari visi, misi, dan nilai kebersamaan, ABUJAPI bertujuan untuk menyinergikan 
                      pelayanan BUJP guna menciptakan pembaharuan kehidupan dan pekerjaan, khususnya di bidang 
                      jasa pengamanan di Indonesia. Organisasi ini berkomitmen untuk mengubah persepsi masyarakat 
                      terhadap profesi satpam, dari pekerjaan sampingan atau rendah menjadi profesi mulia yang 
                      dapat diandalkan dan menjadi tumpuan bagi keberlangsungan industri keamanan.
                    </p>
                  </div>

                  {/* Perkembangan dan Adaptasi */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <BsRocket className="w-4 h-4 text-purple-600" />
                      </div>
                      Perkembangan dan Adaptasi
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Dalam perkembangannya, ABUJAPI terus menyesuaikan visi dan misi organisasi agar tetap 
                      relevan dengan kebutuhan anggota BUJP. Organisasi ini dituntut untuk adaptif terhadap 
                      perubahan zaman, memastikan bahwa BUJP dapat terus berkembang secara profesional dan 
                      memberikan kontribusi nyata bagi keamanan nasional.
                    </p>
                  </div>

                  {/* Peran Strategis */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <BsBuilding className="w-4 h-4 text-yellow-600" />
                      </div>
                      Peran Strategis Saat Ini
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Saat ini, ABUJAPI telah menjadi organisasi yang diakui secara nasional dalam industri 
                      jasa pengamanan. Dengan jaringan yang tersebar di seluruh Indonesia, ABUJAPI berperan 
                      sebagai jembatan komunikasi antara pemerintah, kepolisian, dan industri jasa pengamanan 
                      swasta untuk menciptakan ekosistem keamanan yang sinergis dan profesional.
                    </p>
                  </div>
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
