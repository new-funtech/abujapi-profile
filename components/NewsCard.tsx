'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BsCalendar3, BsClock, BsTag, BsArrowRight, BsEye } from 'react-icons/bs';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
  index: number;
  featured?: boolean;
}

export default function NewsCard({ news, index, featured = false }: NewsCardProps) {
  // Create a placeholder image URL if image is missing
  const getImageSrc = (imageUrl: string) => {
    if (!imageUrl) {
      return `data:image/svg+xml;base64,${btoa(`
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#f1f5f9"/>
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="18" fill="#64748b">
            Gambar Berita
          </text>
        </svg>
      `)}`;
    }
    
    // Handle relative paths and ensure absolute URLs
    if (imageUrl.startsWith('/')) {
      return imageUrl;
    }
    
    // If it's already an absolute URL, return as is
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    // If it's a relative path from API, prepend base URL
    return `https://admin.bpdabujapijabar.or.id${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="group"
    >
      <Link href={`/berita/${news.slug}`} className="block">
        <motion.div 
          className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 h-full ${
            featured ? 'lg:flex lg:flex-row' : ''
          }`}
          whileHover={{ 
            borderColor: 'rgba(59, 130, 246, 0.2)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          
          {/* Image Container - Fixed aspect ratio */}
          <div className={`relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 ${
            featured 
              ? 'lg:w-1/2 aspect-[16/10] lg:aspect-auto' 
              : 'aspect-[16/10]'
          }`}>
            <div className="absolute inset-0">
              <motion.div 
                className="w-full h-full"
                whileHover={{ 
                  filter: 'brightness(1.1) contrast(1.05)',
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={getImageSrc(news.image)}
                  alt={news.title}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                  onError={(e) => {
                    // Fallback to SVG placeholder if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f1f5f9"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="18" fill="#64748b">
                          Gambar Tidak Tersedia
                        </text>
                      </svg>
                    `)}`;
                  }}
                  unoptimized
                />
              </motion.div>
            </div>

            {/* Overlay Gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            ></motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute top-3 left-3"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white/95 text-slate-700 shadow-sm backdrop-blur-sm border border-white/30">
                <BsTag className="w-3 h-3 mr-1" />
                {news.category}
              </span>
            </motion.div>

            {/* Read More Overlay */}
            <motion.div 
              className="absolute inset-0 bg-slate-900/5 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="bg-white rounded-full p-3 shadow-lg border border-slate-200"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <BsArrowRight className="w-5 h-5 text-slate-600" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className={`p-6 flex flex-col justify-between ${featured ? 'lg:w-1/2' : ''}`}>
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
              <div className="flex items-center">
                <BsCalendar3 className="w-4 h-4 mr-1.5" />
                {news.date}
              </div>
              <div className="flex items-center">
                <BsClock className="w-4 h-4 mr-1.5" />
                {news.readTime}
              </div>
              <div className="flex items-center">
                <BsEye className="w-4 h-4 mr-1.5" />
                {news.views.toLocaleString()}
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2 leading-tight ${
              featured ? 'text-xl lg:text-2xl' : 'text-lg'
            }`}>
              {news.title}
            </h3>

            {/* Excerpt */}
            <p className={`text-slate-600 leading-relaxed mb-4 ${
              featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'
            }`}>
              {news.excerpt}
            </p>

            {/* Tags */}
            {news.tags && news.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {news.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author & Location */}
            <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
              <span className="font-medium">{news.author}</span>
              <span>{news.location}</span>
            </div>

            {/* Hover Arrow */}
            <div className="flex items-center justify-end mt-4">
              <motion.div
                className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                Baca Selengkapnya
                <BsArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}