'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import NewsCard from '@components/NewsCard';
import Link from "next/link";
import { BsBookmarksFill } from "react-icons/bs";
import { useNews } from '@/hooks/useNews';
import { BsNewspaper, BsSearch, BsArrowClockwise, BsExclamationTriangle, BsX } from 'react-icons/bs';

export default function NewsPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { news, loading, error } = useNews();

  // Handle search button click
  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate search delay for better UX
    setTimeout(() => {
      setSearchTerm(searchInput);
      setIsSearching(false);
    }, 500);
  };

  // Handle search clear
  const handleClearSearch = () => {
    setSearchInput('');
    setSearchTerm('');
  };

  // Clear input field
  const handleClearInput = () => {
    setSearchInput('');
  };

  // Filter news based on search term
  const filteredNews = news.filter(newsItem => {
    if (!searchTerm) return true; // Show all news if no search term
    
    const matchesSearch = newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsItem.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsItem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const featuredNews = filteredNews.filter(newsItem => newsItem.featured);
  const regularNews = filteredNews.filter(newsItem => !newsItem.featured);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
                        Berita
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </section>
      
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-16 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden"
        >
          {/* Modern Background Pattern with SVG */}
          <div className="absolute inset-0">
            <div className="absolute top-5 left-10 w-64 h-64 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-32 w-64 h-64 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            
            {/* SVG Background Elements */}
            <svg className="absolute top-10 left-10 w-16 h-16 text-green-400/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
              <path d="M7 10H17V12H7V10ZM7 14H14V16H7V14Z" />
            </svg>
            
            <svg className="absolute top-20 right-20 w-12 h-12 text-emerald-400/15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
            
            <svg className="absolute bottom-16 right-16 w-20 h-20 text-green-300/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
            </svg>
            
            <svg className="absolute bottom-10 left-16 w-14 h-14 text-emerald-300/15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H15.5L19 6.5V9H21Z" />
            </svg>
            
            {/* Additional News-related SVG */}
            <svg className="absolute top-1/4 right-1/4 w-10 h-10 text-green-200/12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 12H16V14H10V12ZM10 6H18V8H10V6Z"/>
            </svg>
            
            {/* Subtle dot pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-16 right-32 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-20 left-40 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-20 w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
                <BsNewspaper className="w-4 h-4 mr-2" />
                Pusat Berita & Informasi
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Berita Terkini
                <span className="block text-white mt-1">
                  ABUJAPI Jabar
                </span>
              </h1>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Dapatkan informasi terbaru seputar kegiatan dan perkembangan ABUJAPI Jawa Barat
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-green-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {loading ? '...' : news.length} Artikel Tersedia
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Update Real-time</span>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

      {/* Search Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-3">
                Cari Berita
              </h2>
              <p className="text-slate-600 text-lg">
                Temukan artikel yang Anda cari dengan mudah dan cepat
              </p>
            </div>

            {/* Search Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/50 p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Input Field */}
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <BsSearch className="text-slate-400 w-5 h-5" />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Ketik kata kunci untuk mencari berita..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isSearching && handleSearch()}
                    disabled={isSearching}
                    className="w-full pl-12 pr-12 py-4 text-base text-slate-800 placeholder:text-slate-400 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white shadow-sm hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  
                  {/* Clear Input Button */}
                  {searchInput && (
                    <button
                      onClick={handleClearInput}
                      title="Hapus teks pencarian"
                      aria-label="Hapus teks pencarian"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                    >
                      <BsX className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  disabled={isSearching || !searchInput.trim()}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-3 whitespace-nowrap min-w-32 disabled:cursor-not-allowed"
                >
                  {isSearching ? (
                    <>
                      <BsArrowClockwise className="w-4 h-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <BsSearch className="w-4 h-4" />
                      Cari
                    </>
                  )}
                </button>
                
                {/* Clear Search Button */}
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
                  >
                    <BsX className="w-4 h-4" />
                    Reset
                  </button>
                )}
              </div>
              
              {/* Search Results Info */}
              {/* Search Results Info */}
              {searchTerm && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">
                      Pencarian: &ldquo;{searchTerm}&rdquo;
                    </span>
                    <span className="text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {filteredNews.length} artikel ditemukan
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <BsArrowClockwise className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Memuat Berita...</h3>
              <p className="text-slate-600">Mohon tunggu sebentar</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <BsExclamationTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Gagal Memuat Berita</h3>
              <p className="text-slate-600 mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Coba Lagi
              </button>
            </div>
          )}

         {/* Content */}
          {!loading && !error && (
            <>
              {featuredNews.length > 0 && (
                <div className="mb-20">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Berita Utama</h2>
                    <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
                      {featuredNews.map((newsItem, index) => (
                        <NewsCard 
                          key={newsItem.id} 
                          news={newsItem} 
                          index={index}
                          featured={true}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Regular News */}
              {regularNews.length > 0 && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Berita Lainnya</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularNews.map((newsItem, index) => (
                      <NewsCard 
                        key={newsItem.id} 
                        news={newsItem} 
                        index={index}
                        featured={false}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {filteredNews.length === 0 && news.length > 0 && (
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <BsNewspaper className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Tidak ada berita ditemukan</h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Coba ubah kata kunci pencarian atau hapus filter yang diterapkan
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                  >
                    Reset Pencarian
                  </button>
                </div>
              )}

              {/* Empty State */}
              {news.length === 0 && !loading && !error && (
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <BsNewspaper className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Belum ada berita tersedia</h3>
                  <p className="text-slate-600">
                    Berita akan ditampilkan di sini setelah dipublikasikan
                  </p>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}