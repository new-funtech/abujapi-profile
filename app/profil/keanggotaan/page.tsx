"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from "next/head";
import { BsPeopleFill } from "react-icons/bs";

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* SEO Metadata */}
      <Head>
        <title>Keanggotaan</title>
        <meta
          name="description"
          content="Informasi tentang keanggotaan BPD ABUJAPI Jabar, syarat, dan manfaat menjadi anggota."
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
              <span
                className="text-gray-600 mr-2"
                aria-label="Bookmark Keanggotaan"
              >
                <BsPeopleFill className="w-4 h-4" />
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
                    Keanggotaan
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Main Content: Membership Section */}
        <div className="max-w-screen-2xl px-6 py-8 mx-4 md:mx-30">
          <section>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-2 max-w-5xl mx-auto"
            >
              <BsPeopleFill className="w-6 h-6 mr-2 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Keanggotaan</h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-gray-600 mb-8 max-w-5xl mx-auto"
            >
              Pelajari tentang syarat, manfaat, dan cara bergabung sebagai
              anggota BPD ABUJAPI Jabar.
            </motion.p>

            {/* Membership Information */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-md shadow-md max-w-5xl mx-auto"
            >
              <div className="space-y-6">
                {/* Membership Requirements */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Syarat Keanggotaan
                  </h2>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>
                      Warga Negara Indonesia yang berdomisili di Jawa Barat.
                    </li>
                    <li>
                      Memiliki usaha atau profesi yang relevan dengan bidang BPD
                      ABUJAPI.
                    </li>
                    <li>
                      Mengisi formulir pendaftaran dan melengkapi dokumen yang
                      diperlukan.
                    </li>
                    <li>Membayar iuran keanggotaan sesuai ketentuan.</li>
                  </ul>
                </div>

                {/* Membership Benefits */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Manfaat Keanggotaan
                  </h2>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>Akses ke jaringan bisnis dan peluang kerjasama.</li>
                    <li>Pelatihan dan seminar untuk pengembangan usaha.</li>
                    <li>Dukungan advokasi dan konsultasi hukum.</li>
                    <li>Informasi terkini tentang perkembangan industri.</li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Cara Bergabung
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Untuk menjadi anggota, silakan hubungi kami melalui formulir
                    kontak atau kunjungi kantor BPD ABUJAPI Jabar.
                  </p>
                  <Link
                    href="/profil/kontak"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <BsPeopleFill className="w-4 h-4 mr-2" />
                    Hubungi Kami
                  </Link>
                </div>
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
