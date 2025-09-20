'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsImages } from 'react-icons/bs';
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

  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-10%" });

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsLoading(true);
    setIsOpen(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Modern Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-blue-900/90"></div>
        
        {/* Clean Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-32 w-64 h-64 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Minimal dot pattern */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-slate-300 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6"
            >
              <BsImages className="w-4 h-4 mr-2" />
              Galeri Foto
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Galeri</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> Dokumentasi</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Dokumentasi kegiatan dan momen penting ABUJAPI Jawa Barat
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center text-slate-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-sm">Kegiatan Organisasi</span>
              </div>
              <div className="flex items-center text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                <span className="text-sm">Dokumentasi Resmi</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Gallery Grid */}
      <motion.section 
        ref={galleryRef}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div 
            variants={item}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Koleksi Foto Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi momen-momen berharga dan kegiatan penting yang telah kami lakukan
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => handleImageClick(index)}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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