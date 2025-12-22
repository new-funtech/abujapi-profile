'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsImages, BsImageFill, BsCamera, BsCollectionFill } from 'react-icons/bs';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { fetchDocumentations } from '@/lib/api';
import { Documentation } from '@/types/interface';

export default function GalleryPageContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [documentations, setDocumentations] = useState<Documentation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocumentations = async () => {
      try {
        setLoading(true);
        const response = await fetchDocumentations(1, 50); // Fetch more items for gallery
        // Filter only published documentations
        const publishedDocs = response.data.data.filter(doc => doc.status === 'published');
        setDocumentations(publishedDocs);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load documentations');
        console.error('Error loading documentations:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDocumentations();
  }, []);

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
              Koleksi Dokumentasi
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi dokumentasi resmi dan kegiatan penting ABUJAPI Jawa Barat
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Memuat Dokumentasi...</h3>
              <p className="text-slate-600">Mohon tunggu sebentar</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-red-700 font-semibold mb-2">Gagal memuat dokumentasi</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && documentations.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsImageFill className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-700 font-semibold mb-2">Belum ada dokumentasi</p>
                <p className="text-gray-600 text-sm">Dokumentasi akan ditampilkan di sini ketika tersedia</p>
              </div>
            </div>
          )}

          {/* Documentation Grid */}
          {!loading && !error && documentations.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {documentations.map((doc, index) => (
                <div
                  key={doc.id}
                  className="group cursor-pointer bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  onClick={() => handleImageClick(index)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:brightness-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      unoptimized
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <BsImageFill className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                          <div className="flex items-center text-xs text-gray-700">
                            <BsCamera className="w-3 h-3 mr-1" />
                            <span>Klik untuk melihat</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors text-sm leading-tight">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                      {doc.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(doc.published_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      <div className="flex items-center text-xs text-blue-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1"></div>
                        <span className="font-medium">Dokumentasi</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={documentations.map(doc => ({
          src: doc.image,
          title: doc.title,
          description: doc.excerpt
        }))}
        on={{
          view: ({ index }: { index: number }) => setPhotoIndex(index)
        }}
      />

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
    </>
  );
}