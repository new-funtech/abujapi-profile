'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsCalendar3, BsTag, BsArrowRight, BsArrowClockwise } from 'react-icons/bs';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
  index: number;
  featured?: boolean;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleLinkClick = () => {
    setIsNavigating(true);
  };

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
    
    if (imageUrl.startsWith('/')) return imageUrl;
    if (imageUrl.startsWith('http')) return imageUrl;
    return `https://admin.bpdabujapijabar.or.id${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    // return `http://127.0.0.1:8000${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    // return `http://127.0.0.1:8000${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  };

  return (
    <article className="group">
      <Link href={`/berita/${news.slug}`} className="block" onClick={handleLinkClick}>
        <div
          className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 h-full ${
            featured ? 'lg:flex lg:flex-row' : ''
          }`}
        >
          {/* Image Container */}
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 ${
              featured ? 'lg:w-1/2 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'
            }`}
          >
            <Image
              src={getImageSrc(news.image)}
              alt={news.title}
              fill
              className="object-cover transition-all duration-700 hover:brightness-110 hover:contrast-105"
              sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
              onError={(e) => {
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

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white/95 text-slate-700 shadow-sm backdrop-blur-sm border border-white/30">
                <BsTag className="w-3 h-3 mr-1" />
                {news.category}
              </span>
            </div>

            {/* Read More Overlay */}
            <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white rounded-full p-3 shadow-lg border border-slate-200">
                <BsArrowRight className="w-5 h-5 text-slate-600" />
              </div>
            </div>
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
                <span className="text-slate-400">•</span>
                <span className="ml-2">Oleh {news.author}</span>
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

            {/* Hover Arrow */}
            <div className="flex items-center justify-end mt-4">
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-transform group-hover:translate-x-1">
                Baca Selengkapnya
                <BsArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Loading Overlay */}
          {isNavigating && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-xl">
              <div className="flex flex-col items-center gap-3">
                <BsArrowClockwise className="w-8 h-8 text-blue-600 animate-spin" />
                <span className="text-blue-600 font-medium">Memuat berita...</span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}