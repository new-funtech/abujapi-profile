"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Image from "next/image";
import { BsBookmarksFill } from "react-icons/bs";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Head from "next/head";
import Header from "@/components/Header";

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // Daftar gambar untuk Dokumentasi
  const galleryImages = [
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery1.jpeg",
      alt: "Acara ABUJAPI Jabar 2018",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery2.jpeg",
      alt: "Pelantikan BPD ABUJAPI 2019",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery3.jpeg",
      alt: "Rakerda ABUJAPI Jabar 2020",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery4.jpeg",
      alt: "Sertifikasi Gada Pratama 2020",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery5.jpeg",
      alt: "Talk Show ABUJAPI 2022",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery6.jpeg",
      alt: "Rakerda ABUJAPI Jabar 2023",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery7.jpeg",
      alt: "Seminar ABUJAPI Jabar 2024",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery8.jpeg",
      alt: "Pelatihan Keamanan ABUJAPI 2024",
    },
    {
      src: "https://storage.ganipedia.xyz/abujapi/assets/gallery9.jpeg",
      alt: "Acara Silaturahmi ABUJAPI Jabar 2025",
    },
  ];

  // Preload gambar saat komponen dimuat
  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* SEO Metadata */}
      {/* <Header /> */}
      <Head>
        <title>Dokumentasi</title>
        <meta
          name="description"
          content="Dokumentasi kegiatan BPD ABUJAPI Jabar, termasuk acara, pelantikan, dan sertifikasi."
        />
        {galleryImages.map((image, index) => (
          <link key={index} rel="preload" href={image.src} as="image" />
        ))}
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
                aria-label="Bookmark Dokumentasi"
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
                    Dokumentasi
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Main Content: Gallery */}
        <div className="max-w-screen-2xl px-6 py-8 mx-4 md:mx-30">
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-md shadow-md cursor-pointer"
                  onClick={() => {
                    setIsLoading(true);
                    setSelectedImageIndex(index);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    priority={index < 3} // Prioritaskan 3 gambar pertama
                    unoptimized // Menggunakan unoptimized tanpa = {true}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white text-sm p-2 text-center">
                    {image.alt}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Lightbox Modal */}
          {selectedImageIndex !== null && (
            <Lightbox
              mainSrc={galleryImages[selectedImageIndex].src}
              nextSrc={
                galleryImages[(selectedImageIndex + 1) % galleryImages.length]
                  .src
              }
              prevSrc={
                galleryImages[
                  (selectedImageIndex - 1 + galleryImages.length) %
                    galleryImages.length
                ].src
              }
              onCloseRequest={() => setSelectedImageIndex(null)}
              onMovePrevRequest={() =>
                setSelectedImageIndex(
                  (selectedImageIndex - 1 + galleryImages.length) %
                    galleryImages.length
                )
              }
              onMoveNextRequest={() =>
                setSelectedImageIndex(
                  (selectedImageIndex + 1) % galleryImages.length
                )
              }
              imageCaption={galleryImages[selectedImageIndex].alt}
              wrapperClassName="z-50"
              reactModalProps={{
                ariaLabel: "Dokumentasi Gambar ABUJAPI Jabar",
              }}
              imageLoadErrorMessage="Gagal memuat gambar, coba lagi nanti."
              onImageLoad={() => setIsLoading(false)}
            />
          )}
          {isLoading && selectedImageIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="text-white text-lg">Memuat gambar...</div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
