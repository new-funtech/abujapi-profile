"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import LatestNews from "@components/LatestNews";
import SearchBar from "@components/SearchBar";
import { BsBookmarksFill, BsPeople, BsBuilding, BsShield } from "react-icons/bs";

export default function AboutPage() {
  const pathname = usePathname();

  const aboutData = {
    companyName: "ABUJAPI",
    history: `
      ABUJAPI adalah asosiasi resmi yang menaungi Badan Usaha Jasa Pengamanan (BUJP) di seluruh Indonesia. 
      Organisasi ini berfungsi sebagai wadah koordinasi, komunikasi, dan pembinaan perusahaan jasa pengamanan (security service).
    `,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
              <BsShield className="w-4 h-4 mr-2" />
              Tentang Kami
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Profil</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> ABUJAPI Jabar</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Mengenal lebih dekat Badan Pengurus Daerah ABUJAPI Jawa Barat
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 text-slate-300"
            >
              <div className="flex items-center space-x-2">
                <BsPeople className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Organisasi Resmi</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsBuilding className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Jasa Pengamanan</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
                <span
                  className="text-blue-600 font-semibold"
                  aria-current="page"
                >
                  Profil
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

        {/* Content with Sidebar and Right Column */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar pathname={pathname} />

          {/* Main Content */}
          <div className="flex-1 lg:max-w-4xl">
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <BsShield className="w-8 h-8 mr-3 text-blue-600" />
                Apa itu BPD ABUJAPI Jabar?
              </h2>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6 text-base">
                  {aboutData.history}
                </p>
                <p className="text-slate-600 leading-relaxed mb-8 text-base">
                  BPD ABUJAPI Jabar adalah perpanjangan dari kepengurusan ABUJAPI
                  di tingkat provinsi Jawa Barat. Perannya menghubungkan BUJP di
                  wilayah Jawa Barat dengan BPP ABUJAPI (pusat) serta bersinergi
                  dengan pihak eksternal seperti Polri, pemerintah daerah, dunia
                  usaha, dan lembaga pendidikan/sertifikasi.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <BsPeople className="w-6 h-6 mr-2 text-blue-600" />
                    Tujuan BPD ABUJAPI Jabar
                  </h3>
                  <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-3">
                    <li>
                      Menghimpun, membina, dan mengembangkan kemampuan, kegiatan,
                      dan kepentingan Badan Usaha di bidang pengamanan dan
                      penyelamatan agar menjadi lebih tangguh, profesional, dan
                      mandiri dalam rangka mewujudkan lingkungan yang aman dan
                      tertib.
                    </li>
                    <li>
                      Menciptakan dan mengembangkan iklim yang aman dan tertib di
                      lingkungan dunia usaha yang memungkinkan keikutsertaan
                      pengusaha berperan secara efektif dalam pembangunan nasional.
                    </li>
                    <li>
                      Mengadakan penelitian, pengembangan, dan kerjasama di bidang
                      teknologi dan pelayanan jasa pengamanan/penyelamatan pada
                      tingkat nasional maupun internasional.
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <BsBuilding className="w-6 h-6 mr-2 text-slate-600" />
                    Fungsi BPD ABUJAPI Jabar
                  </h3>
                  <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-3">
                    <li>Wadah penyalur kegiatan sesuai kepentingan anggota.</li>
                    <li>
                      Wadah pembinaan dan pengembangan anggota dalam usaha
                      mewujudkan tujuan organisasi.
                    </li>
                    <li>
                      Wadah peran serta dalam usaha mensukseskan pembangunan
                      nasional, khususnya dalam bidang keamanan dan ketertiban
                      masyarakat.
                    </li>
                    <li>
                      Sarana penyalur aspirasi anggota dan sebagai sarana komunikasi
                      sosial timbal balik antar anggota.
                    </li>
                    <li>
                      Pusat informasi, konsultasi, advokasi, dan fasilitasi
                      pengusaha jasa pengamanan dan penyelamatan.
                    </li>
                    <li>
                      Menjembatani kepentingan antara pengguna jasa pengamanan dan
                      penyelamatan dengan anggota ABUJAPI.
                    </li>
                    <li>
                      Mitra Pemerintah/Kepolisian Negara Republik Indonesia dalam
                      menetapkan kualifikasi perusahaan di bidang pengamanan dan
                      penyelamatan serta pengawasan standar peningkatan mutu.
                    </li>
                    <li>
                      Melaksanakan sertifikasi bagi perusahaan-perusahaan yang
                      terkait dengan jasa pengamanan dan penyelamatan.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Posisi Strategis
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Karena Jawa Barat memiliki jumlah perusahaan jasa pengamanan dan
                  tenaga satpam yang sangat besar, BPD ABUJAPI Jabar menjadi salah
                  satu BPD yang paling berpengaruh di tingkat nasional.
                </p>
              </div>
            </section>
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
