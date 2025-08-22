"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { BsBookmarksFill } from "react-icons/bs";

export default function VisiMisiPage() {
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
              className="text-xs text-gray-600 font-medium flex items-center mx-22"
              aria-label="Breadcrumb"
            >
              <span
                className="text-gray-600 mr-2"
                aria-label="Bookmark Visi dan Misi"
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
                    href="/about"
                    className="hover:text-green-600 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <span
                    className="text-green-600 font-semibold"
                    aria-current="page"
                  >
                    Visi dan Misi
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Content with Sidebar and Right Column */}
        <div className="max-w-screen-2xl px-6 py-8 flex flex-col md:flex-row md:items-stretch gap-4 mx-4 md:mx-30">
          {/* Sidebar */}
          <Sidebar pathname={pathname} />

          {/* Main Content */}
          <div className="md:w-3/5 md:border-r md:border-gray-300">
            <section className="mr-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                Visi dan Misi
              </motion.h2>
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <p>
                  Visi dan Misi merupakan salah satu unsur yang harus ada dan
                  dimiliki oleh sebuah perusahaan yang sehat. Kedua komponen ini
                  menjadi arah dan pedoman atas semua proses pengambilan
                  keputusan yang hendak dilakukan perusahaan.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Visi
                  </h3>
                  <p>
                    “Menjadikan ABUJAPI Jawa Barat sebagai wadah yang solid,
                    profesional, dan berdaya guna dalam membina serta
                    mengembangkan Badan Usaha Jasa Pengamanan (BUJP) yang taat
                    hukum, beretika, dan bermitra strategis dengan Polri,
                    pemerintah, serta masyarakat.”
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Misi
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Konseptual:</strong> Menyusun arah dan konsep
                      organisasi yang jelas untuk penguatan BUJP di Jawa Barat.
                    </li>
                    <li>
                      <strong>Konsolidasi:</strong> Membangun soliditas
                      antar-BUJP melalui koordinasi, komunikasi, dan kerjasama
                      lintas daerah.
                    </li>
                    <li>
                      <strong>Komitmen:</strong> Menegakkan komitmen bersama
                      dalam profesionalisme, kepatuhan hukum, serta
                      kesejahteraan satpam.
                    </li>
                    <li>
                      <strong>Konkritisasi:</strong> Mewujudkan program nyata
                      yang bermanfaat bagi anggota, termasuk pelatihan,
                      sertifikasi, dan advokasi.
                    </li>
                    <li>
                      <strong>Kode Etik:</strong> Menegakkan etika profesi dalam
                      industri jasa pengamanan, agar tercipta iklim usaha yang
                      sehat dan kompetitif.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Search and News */}
          <div className="md:w-1/5">
            <div>
              <input
                type="text"
                placeholder="Cari..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-sm text-gray-700"
                aria-label="Pencarian"
              />
            </div>
            <div className="bg-white shadow-md p-4 rounded-md mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Berita Terkini
              </h3>
              <div className="space-y-2">
                <p className="text-xs text-gray-600">Mon, 23/12/2024</p>
                <Link
                  href="/news/abujapi-event-2024"
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-300"
                >
                  BPD Abujapi Jabar Selenggarakan Acara...
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
