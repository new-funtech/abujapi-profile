import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";

export default function Keanggotaan() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <Navbar />

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

      <section className="flex items-center justify-center min-h-[75vh] px-6">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-full shadow-sm animate-pulse">
              <FiUsers className="text-green-600 w-12 h-12" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Keanggotaan
          </h1>

          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Halaman{" "}
            <span className="font-medium text-green-600">Keanggotaan</span>{" "}
            sedang dalam tahap pengembangan. Nantikan update terbaru dari kami.
          </p>

          <span className="inline-block border border-green-600 text-green-700 px-6 py-2 rounded-full font-medium shadow-sm hover:bg-green-600 hover:text-white transition-colors duration-300">
            🚧 Coming Soon
          </span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
