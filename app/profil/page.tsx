"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { BsBookmarksFill } from "react-icons/bs";

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
              <span className="text-gray-600 mr-2" aria-label="Bookmark About">
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
                  <span
                    className="text-green-600 font-semibold"
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
                Apa itu BPD ABUJAPI Jabar?
              </motion.h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {aboutData.history}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                BPD ABUJAPI Jabar adalah perpanjangan dari kepengurusan ABUJAPI
                di tingkat provinsi Jawa Barat. Perannya menghubungkan BUJP di
                wilayah Jawa Barat dengan BPP ABUJAPI (pusat) serta bersinergi
                dengan pihak eksternal seperti Polri, pemerintah daerah, dunia
                usaha, dan lembaga pendidikan/sertifikasi.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Fungsi Utama BPD ABUJAPI Jabar
              </h3>
              <ul className="text-sm text-gray-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Pembinaan Anggota BUJP</strong>
                  <ul className="list-circle list-inside ml-4">
                    <li>
                      Membantu perusahaan jasa pengamanan agar patuh pada
                      regulasi (misalnya Perpol No. 4 Tahun 2020 tentang Pam
                      Swakarsa).
                    </li>
                    <li>
                      Memberikan arahan terkait operasional, standar keamanan,
                      dan manajemen satpam.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Konsolidasi & Koordinasi</strong>
                  <ul className="list-circle list-inside ml-4">
                    <li>Menjadi forum komunikasi antar-BUJP di Jawa Barat.</li>
                    <li>
                      Menyampaikan aspirasi anggota kepada pemerintah pusat
                      maupun Polri.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Peningkatan Profesionalisme</strong>
                  <ul className="list-circle list-inside ml-4">
                    <li>
                      Mendorong pelatihan dan sertifikasi satpam (Gada Pratama,
                      Gada Madya, Gada Utama).
                    </li>
                    <li>
                      Bekerjasama dengan LSP (Lembaga Sertifikasi Profesi) dan
                      BNSP untuk uji kompetensi.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Advokasi & Perlindungan Hukum</strong>
                  <ul className="list-circle list-inside ml-4">
                    <li>
                      Membela kepentingan BUJP jika terjadi masalah hukum,
                      regulasi, atau konflik ketenagakerjaan.
                    </li>
                    <li>
                      Memberikan masukan kepada pemerintah terkait kebijakan
                      upah, struktur skala upah, dan perlindungan tenaga satpam.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Kemitraan & Sinergi</strong>
                  <ul className="list-circle list-inside ml-4">
                    <li>
                      Bekerja sama dengan Polri untuk mendukung tugas keamanan
                      swakarsa.
                    </li>
                    <li>
                      Bermitra dengan KADIN, Disnaker, akademisi, serta
                      organisasi profesi lainnya.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Penguatan Organisasi Daerah</strong>
                  <ul className="list-circle list-inside ml-4">
                    <li>
                      Membentuk Korwil (Koordinator Wilayah) untuk daerah-daerah
                      di Jawa Barat (Bogor Raya, Purwasuka, Ciayumajakuning,
                      dll.) agar pembinaan lebih merata.
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Tujuan Utama
              </h3>
              <ul className="text-sm text-gray-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>
                  Menjadikan BUJP di Jawa Barat lebih profesional, sehat, dan
                  berdaya saing.
                </li>
                <li>
                  Menjaga kemandirian sektor pengamanan nasional agar tidak
                  dikuasai oleh perusahaan asing.
                </li>
                <li>
                  Memberikan perlindungan, kesejahteraan, dan pengakuan profesi
                  bagi satpam sebagai tenaga kerja formal.
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Posisi Strategis
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Karena Jawa Barat memiliki jumlah perusahaan jasa pengamanan dan
                tenaga satpam yang sangat besar, BPD ABUJAPI Jabar menjadi salah
                satu BPD yang paling berpengaruh di tingkat nasional.
              </p>
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
                {/* Example additional news item */}
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
