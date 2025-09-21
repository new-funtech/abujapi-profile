'use client';

import Link from 'next/link';
import { useNews } from '@/hooks/useNews';
import { BsCalendar, BsChevronRight, BsNewspaper } from 'react-icons/bs';

interface LatestNewsProps {
  limit?: number;
  className?: string;
}

export default function LatestNews({ limit = 3, className = '' }: LatestNewsProps) {
  const { news, loading, error } = useNews();

  if (loading) {
    return (
      <div className={`bg-white shadow-lg p-6 rounded-lg border border-gray-200 ${className}`}>
        <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 flex items-center">
          <BsNewspaper className="w-5 h-5 mr-2 text-blue-600" />
          Berita Terkini
        </h4>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-white shadow-lg p-6 rounded-lg border border-gray-200 ${className}`}>
        <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 flex items-center">
          <BsNewspaper className="w-5 h-5 mr-2 text-blue-600" />
          Berita Terkini
        </h4>
        <p className="text-sm text-gray-500">Gagal memuat berita terkini</p>
      </div>
    );
  }

  const latestNews = news.slice(0, limit);

  return (
    <div className={`bg-white shadow-lg p-6 rounded-lg border border-gray-200 ${className}`}>
      <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 flex items-center">
        <BsNewspaper className="w-5 h-5 mr-2 text-blue-600" />
        Berita Terkini
      </h4>
      
      <div className="space-y-6">
        {latestNews.map((article) => (
          <div key={article.id} className="border-l-4 border-blue-600 pl-4 hover:bg-gray-50 transition-colors duration-200 rounded-r-lg py-2">
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <BsCalendar className="w-3 h-3 mr-1" />
              {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </div>
            
            <Link
              href={`/berita/${article.slug}`}
              className="group block"
            >
              <h5 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-relaxed">
                {article.title}
              </h5>
              
              {article.excerpt && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
              
              <div className="flex items-center text-xs text-blue-600 mt-2 group-hover:text-blue-700 transition-colors duration-300">
                <span>Baca selengkapnya</span>
                <BsChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {news.length > limit && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Link
            href="/berita"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
          >
            <span>Lihat Semua Berita</span>
            <BsChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      )}
    </div>
  );
}