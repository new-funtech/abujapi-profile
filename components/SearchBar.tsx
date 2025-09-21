'use client';

import { useState, useEffect, useRef } from 'react';
import { useNews } from '@/hooks/useNews';
import Link from 'next/link';
import { BsSearch, BsCalendar, BsX } from 'react-icons/bs';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const { news } = useNews();
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredNews, setFilteredNews] = useState<typeof news>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter news based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredNews([]);
      setIsOpen(false);
      return;
    }

    const filtered = news.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.excerpt && article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    setFilteredNews(filtered);
    setIsOpen(true);
  }, [searchTerm, news]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Handle item click
  const handleItemClick = () => {
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Pencarian Berita</h4>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari berita..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 transition-all duration-300"
            aria-label="Pencarian Berita"
          />
          <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Hapus pencarian"
              title="Hapus pencarian"
            >
              <BsX className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            {filteredNews.length > 0 ? (
              <div className="p-2">
                <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
                  {filteredNews.length} berita ditemukan
                </div>
                {filteredNews.slice(0, 5).map((article) => (
                  <Link
                    key={article.id}
                    href={`/berita/${article.slug}`}
                    onClick={handleItemClick}
                    className="block p-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                  >
                    <h5 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                      {article.title}
                    </h5>
                    {article.excerpt && (
                      <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>
                    )}
                    <div className="flex items-center text-xs text-gray-500">
                      <BsCalendar className="w-3 h-3 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </Link>
                ))}
                {filteredNews.length > 5 && (
                  <div className="p-3 text-center">
                    <Link
                      href={`/berita?search=${encodeURIComponent(searchTerm)}`}
                      onClick={handleItemClick}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Lihat semua {filteredNews.length} hasil
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500 text-sm">
                Tidak ada berita yang ditemukan untuk &ldquo;{searchTerm}&rdquo;
                </div>

            )}
          </div>
        )}
      </div>
    </div>
  );
}