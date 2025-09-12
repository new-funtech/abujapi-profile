"use client";

import "react-image-lightbox/style.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Image, { StaticImageData } from "next/image";
import { BsBookmarksFill } from "react-icons/bs";
import Lightbox from "react-image-lightbox";
import Head from "next/head";

import galleryImage1 from "@images/serviceImage1.jpeg";
import galleryImage2 from "@images/galleryImage2.jpeg";
import galleryImage3 from "@images/galleryImage3.jpeg";
import galleryImage4 from "@images/serviceImage2.jpeg";
import galleryImage5 from "@images/heroCarousel2.jpeg";
import galleryImage6 from "@images/heroCarousel3.jpeg";
import galleryImage7 from "@images/galleryImage7.jpeg";
import galleryImage8 from "@images/galleryImage8.jpeg";
import galleryImage9 from "@images/galleryImage9.jpeg";

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const getImageUrl = (img: StaticImageData | string) =>
    typeof img === "string" ? img : img.src;

  const galleryImages: { src: StaticImageData; alt: string }[] = [
    { src: galleryImage1, alt: "Acara ABUJAPI Jabar 2018" },
    { src: galleryImage2, alt: "Pelantikan BPD ABUJAPI 2019" },
    { src: galleryImage3, alt: "Rakerda ABUJAPI Jabar 2020" },
    { src: galleryImage4, alt: "Sertifikasi Gada Pratama 2020" },
    { src: galleryImage5, alt: "Talk Show ABUJAPI 2022" },
    { src: galleryImage6, alt: "Rakerda ABUJAPI Jabar 2023" },
    { src: galleryImage7, alt: "Seminar ABUJAPI Jabar 2024" },
    { src: galleryImage8, alt: "Pelatihan Keamanan ABUJAPI 2024" },
    { src: galleryImage9, alt: "Acara Silaturahmi ABUJAPI Jabar 2025" },
  ];

  // Preload gambar saat komponen dimuat
  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new window.Image();
      img.src = getImageUrl(image.src);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Dokumentasi</title>
        <meta
          name="description"
          content="Dokumentasi kegiatan BPD ABUJAPI Jabar, termasuk acara, pelantikan, dan sertifikasi."
        />
        {galleryImages.map((image, index) => (
          <link key={index} rel="preload" href={getImageUrl(image.src)} as="image" />
        ))}
      </Head>

      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-screen-2xl mx-auto px-6">
          <nav
            className="text-sm text-gray-600 font-medium flex items-center"
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

      {/* Gallery Grid */}
      <main className="flex-grow">
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
                    priority={index < 3}
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
              mainSrc={getImageUrl(galleryImages[selectedImageIndex].src)}
              nextSrc={getImageUrl(
                galleryImages[(selectedImageIndex + 1) % galleryImages.length].src
              )}
              prevSrc={getImageUrl(
                galleryImages[
                  (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
                ].src
              )}
              onCloseRequest={() => setSelectedImageIndex(null)}
              onMovePrevRequest={() =>
                setSelectedImageIndex(
                  (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
                )
              }
              onMoveNextRequest={() =>
                setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length)
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

          {/* Loading Overlay */}
          {isLoading && selectedImageIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="text-white text-lg">Memuat gambar...</div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
