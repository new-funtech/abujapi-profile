'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import NewsCard from '@components/NewsCard';
import { useNewsDetail, useNews } from '@/hooks/useNews';
import { 
  BsCalendar3, 
  BsGeoAlt, 
  BsShare, 
  BsArrowLeft,
  BsNewspaper,
  BsTags,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsWhatsapp,
  BsArrowClockwise,
  BsExclamationTriangle
} from 'react-icons/bs';

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const contentRef = useRef(null);
  const relatedRef = useRef(null);
  
  const { article, loading, error } = useNewsDetail(slug);
  const { news } = useNews();
  
  // Get related articles (other articles)
  const relatedArticles = news
    .filter(newsItem => newsItem.id !== article?.id)
    .slice(0, 3);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <BsArrowClockwise className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <h1 className="text-xl font-semibold text-slate-800 mb-2">Memuat artikel...</h1>
            <p className="text-slate-600">Mohon tunggu sebentar</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <BsExclamationTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-xl font-semibold text-slate-800 mb-2">Gagal memuat artikel</h1>
            <p className="text-slate-600 mb-6">{error}</p>
            <Link 
              href="/berita"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BsArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Berita
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <BsNewspaper className="w-12 h-12 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Artikel tidak ditemukan</h1>
            <p className="text-slate-600 mb-6">Artikel yang Anda cari tidak tersedia atau telah dihapus</p>
            <Link 
              href="/berita"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BsArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Berita
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/berita/${slug}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
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

        <div className="max-w-4xl mx-auto px-6 relative">
          {/* Article Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200 mb-6"
            >
              <BsNewspaper className="w-4 h-4 mr-2" />
              {article.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight"
            >
              {article.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 text-green-100 text-sm"
            >
              <div className="flex items-center">
                <BsCalendar3 className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <BsGeoAlt className="w-4 h-4 mr-2" />
                {article.location}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Main Content */}
    <section ref={contentRef} className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100 relative">
            <Image
              src={article.image || `data:image/svg+xml;base64,${btoa(`
                <svg width="1024" height="576" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#f1f5f9"/>
                  <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="24" fill="#64748b">
                    Gambar Berita
                  </text>
                </svg>
              `)}`}
              alt={article.title}
              width={1024}
              height={576}
              className="w-full h-full object-cover"
              priority
              unoptimized
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="1024" height="576" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f1f5f9"/>
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="24" fill="#64748b">
                      Gambar Tidak Tersedia
                    </text>
                  </svg>
                `)}`;
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <BsNewspaper className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{article.author}</p>
                  <p className="text-sm text-slate-600">Editor & Publikasi</p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-2">
                <BsShare className="w-4 h-4 text-slate-400 mr-2" />
                <button
                  aria-label='Share on Facebook'
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-110 active:scale-90"
                >
                  <BsFacebook className="w-4 h-4" />
                </button>
                <button
                  aria-label='Share on Twitter'
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${article.title}`, '_blank')}
                  className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-transform transform hover:scale-110 active:scale-90"
                >
                  <BsTwitter className="w-4 h-4" />
                </button>
                <button
                  aria-label='Share on Linkedin'
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                  className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-transform transform hover:scale-110 active:scale-90"
                >
                  <BsLinkedin className="w-4 h-4" />
                </button>
                <button
                  aria-label='share on Whatsapp'
                  onClick={() => window.open(`https://wa.me/?text=${article.title} ${shareUrl}`, '_blank')}
                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-110 active:scale-90"
                >
                  <BsWhatsapp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
                {article.excerpt}
              </p>

              {article.content && (
                <div 
                  className="space-y-6 text-gray-900 leading-relaxed prose prose-lg prose-gray max-w-none
                            prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4
                            prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                            prose-strong:text-gray-900 prose-strong:font-bold
                            prose-em:text-gray-700 prose-em:italic
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                            prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-800
                            prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                            prose-li:text-gray-800 prose-li:mb-2 prose-li:leading-relaxed
                            prose-h2:text-2xl prose-h2:text-gray-900 prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
                            prose-h3:text-xl prose-h3:text-gray-900 prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center flex-wrap gap-2">
                <BsTags className="w-4 h-4 text-slate-400 mr-2" />
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <motion.section
          ref={relatedRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-slate-800 mb-8 text-center"
            >
              Berita Terkait
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((news, index) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  index={index}
                  featured={false}
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Back to News */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/berita"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <BsArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Halaman Berita
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}