'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsImages, BsImageFill, BsCamera, BsCollectionFill } from 'react-icons/bs';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const galleryImages = [
  "/images/galleryImage2.jpeg",
  "/images/galleryImage3.jpeg", 
  "/images/galleryImage7.jpeg",
  "/images/galleryImage8.jpeg",
  "/images/galleryImage9.jpeg",
  "/images/heroCarousel1.jpeg",
  "/images/heroCarousel2.jpeg",
  "/images/heroCarousel3.jpeg"
];

export default function GalleryPageContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsLoading(true);
    setIsOpen(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <>
      {/* Hero Section with Simple Motion */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gallery-themed SVG icons */}
          <div className="absolute top-20 left-16 opacity-10">
            <BsImageFill className="w-16 h-16 text-blue-300" />
          </div>
          <div className="absolute top-32 right-24 opacity-10">
            <BsCamera className="w-12 h-12 text-cyan-300" />
          </div>
          <div className="absolute bottom-20 left-32 opacity-10">
            <BsCollectionFill className="w-14 h-14 text-slate-300" />
          </div>
          <div className="absolute top-40 right-40 opacity-10">
            <BsImages className="w-10 h-10 text-blue-200" />
          </div>
          <div className="absolute bottom-32 right-16 opacity-10">
            <BsImageFill className="w-8 h-8 text-cyan-200" />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-blue-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-8">
              <BsImages className="w-4 h-4 mr-2" />
              Galeri Dokumentasi
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Galeri</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> Foto</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Koleksi dokumentasi kegiatan dan momen bersejarah ABUJAPI Jawa Barat
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Kegiatan Resmi</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span>Dokumentasi Acara</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                <span>Momen Bersejarah</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Koleksi Foto Kami
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi momen-momen berharga dan kegiatan penting yang telah kami lakukan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => handleImageClick(index)}
              >
                <div className="aspect-square relative overflow-hidden bg-gray-200">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">Foto {index + 1}</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Click indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <BsImages className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
          prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
          imageTitle={`Foto ${photoIndex + 1} dari ${galleryImages.length}`}
          imageCaption="Dokumentasi kegiatan organisasi"
          reactModalStyle={{
            overlay: {
              zIndex: 9999
            }
          }}
        />
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
    </>
  );
}