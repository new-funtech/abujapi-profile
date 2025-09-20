import { Metadata } from "next";
import { generateMetadata as createMetadata } from "../../../lib/seo";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ContactPageContent from "@components/ContactPageContent";
import { BsBookmarksFill } from "react-icons/bs";

export const metadata: Metadata = createMetadata({
  title: "Kontak ABUJAPI Jawa Barat",
  description: "Hubungi BPD ABUJAPI Jawa Barat untuk informasi dan konsultasi.",
  url: "https://abujapi-jabar.id/profil/kontak",
});

export default function ContactPage() {
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
            <BsBookmarksFill className="w-4 h-4 mr-2 text-green-600" />
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  href="/profil"
                  className="hover:text-green-600 transition-colors"
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
                  Kontak
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <ContactPageContent />
      <Footer />
    </main>
  );
}
