"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { BsBookmarksFill } from "react-icons/bs";

export default function SejarahPage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
              <span
                className="text-gray-600 mr-2"
                aria-label="Bookmark Sejarah Perusahaan"
              >
                <BsBookmarksFill className="w-4 h-4" />
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
                    Sejarah Perusahaan
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Content with Sidebar and Right Column */}
        <div className="max-w-screen-2xl px-6 py-8 flex flex-col md:flex-row md:items-stretch gap-4 mx-2 md:mx-18">
          {/* Sidebar */}
          <Sidebar pathname={pathname} />

          {/* Main Content */}
          <div className="md:w-3/4 md:border-r md:border-gray-300">
            <section className="mr-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                Sejarah & Perkembangan ABUJAPI
              </motion.h2>
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Pendirian ABUJAPI
                  </h3>
                  <p>
                    Asosiasi Badan Usaha Jasa Pengamanan Indonesia (ABUJAPI)
                    didirikan pada tanggal 14 Februari 2006. Pendirian
                    organisasi ini dilandasi semangat untuk menumbuhkembangkan
                    wirausaha, khususnya di bidang jasa pengamanan, sebagai
                    pengemban fungsi terbatas dari POLRI, yang dikenal sebagai
                    “Mitra Polri” atau Pam Swakarsa.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Tujuan dan Sinergi
                  </h3>
                  <p>
                    Para pendiri ABUJAPI, yang mayoritas merupakan pelaku Badan
                    Usaha Jasa Pengamanan (BUJP), bertujuan untuk mensinergikan
                    kepentingan dan tujuan yang sama, yaitu menghimpun, membina,
                    dan mengembangkan kemampuan, kegiatan, serta kepentingan
                    usaha yang tangguh dan profesional. ABUJAPI menjadi wadah
                    untuk menyalurkan kegiatan dan pengembangan anggota BUJP
                    guna mewujudkan lingkungan yang aman dan tertib.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Visi dan Misi
                  </h3>
                  <p>
                    Berangkat dari visi, misi, dan nilai kebersamaan, ABUJAPI
                    bertujuan untuk menyinergikan pelayanan BUJP guna
                    menciptakan pembaharuan kehidupan dan pekerjaan, khususnya
                    di bidang jasa pengamanan di Indonesia. Organisasi ini
                    berkomitmen untuk mengubah persepsi masyarakat terhadap
                    profesi satpam, dari pekerjaan sampingan atau rendah menjadi
                    profesi mulia yang dapat diandalkan dan menjadi tumpuan bagi
                    keberlangsungan industri keamanan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Perkembangan dan Adaptasi
                  </h3>
                  <p>
                    Dalam perkembangannya, ABUJAPI terus menyesuaikan visi dan
                    misi organisasi agar tetap relevan dengan kebutuhan anggota
                    BUJP. Organisasi ini dituntut untuk adaptif terhadap
                    perubahan zaman, memastikan bahwa BUJP dapat terus
                    berkembang secara profesional dan memberikan kontribusi
                    nyata bagi keamanan nasional.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Search and News */}
          <div className="md:w-1/5">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Cari..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-sm text-gray-700 transition-all duration-300"
                aria-label="Pencarian"
              />
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-green-600 pb-2">
                Berita Terkini
              </h4>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="text-xs text-gray-500 mb-1">Mon, 23/12/2024</p>
                  <Link
                    href="/news/abujapi-event-2024"
                    className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
                  >
                    BPD Abujapi Jabar Selenggarakan Acara...
                  </Link>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="text-xs text-gray-500 mb-1">Tue, 24/12/2024</p>
                  <Link
                    href="/news/abujapi-training-2024"
                    className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
                  >
                    Pelatihan Satpam Gada Pratama 2024
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/news"
                  className="text-sm font-semibold text-green-600 hover:text-green-800 transition-colors duration-300"
                >
                  Lihat Semua Berita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
