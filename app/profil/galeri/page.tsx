import { Metadata } from "next";
import { generateMetadata as createMetadata } from "../../../lib/seo";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import dynamic from "next/dynamic";
import { BsBookmarksFill } from "react-icons/bs";

// Dynamic import untuk client component
const GalleryPageContent = dynamic(() => import("../../../components/GalleryPageContent"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
});

export const metadata: Metadata = createMetadata({
  title: "Galeri ABUJAPI Jawa Barat",
  description: "Galeri foto kegiatan dan dokumentasi BPD ABUJAPI Jawa Barat.",
  url: "https://abujapi-jabar.id/profil/galeri",
});

export default function GalleryPage() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

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
                  Galeri
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <GalleryPageContent />
      <Footer />
    </main>
  );
}
