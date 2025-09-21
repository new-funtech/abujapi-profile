'use client';

import { FiSearch, FiX, FiFilter, FiLoader } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
  totalResults: number;
  loading?: boolean;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (field: string) => void;
  onSortOrderChange: (order: 'asc' | 'desc') => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
}

const sortOptions = [
  { value: 'bujp', label: 'Nama BUJP' },
  { value: 'tgl_daftar', label: 'Tanggal Daftar' },
  { value: 'tgl_expired', label: 'Tanggal Expired' },
  { value: 'provinsi', label: 'Provinsi' },
  { value: 'kabupaten_kota', label: 'Kab/Kota' },
];

const pageSizeOptions = [
  { value: 5, label: '5 per halaman' },
  { value: 10, label: '10 per halaman' },
  { value: 25, label: '25 per halaman' },
  { value: 50, label: '50 per halaman' },
];

export default function SearchBar({
  searchTerm,
  onSearchChange,
  onReset,
  totalResults,
  loading = false,
  sortBy,
  sortOrder,
  onSortChange,
  onSortOrderChange,
  pageSize,
  onPageSizeChange
}: SearchBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [isSearching, setIsSearching] = useState(false);

  // Sync local search term when external searchTerm changes (e.g., on reset)
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleClearSearch = () => {
    setLocalSearchTerm('');
    onSearchChange('');
  };

  const handleSearch = () => {
    if (localSearchTerm.trim().length > 0) {
      setIsSearching(true);
      
      // Show loading for 3 seconds before executing search
      setTimeout(() => {
        onSearchChange(localSearchTerm.trim());
        setIsSearching(false);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleSortOrder = () => {
    onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-4"
    >
      {/* Main Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 min-w-0 w-full sm:w-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Cari BUJP..."
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                disabled={loading || isSearching}
              />
              {localSearchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={loading || isSearching}
                  title="Hapus pencarian"
                  aria-label="Hapus pencarian"
                >
                  <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
            <button
              onClick={handleSearch}
              disabled={loading || isSearching}
              className="px-4 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              {isSearching ? (
                <FiLoader className="w-4 h-4 animate-spin" />
              ) : (
                <FiSearch className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {isSearching ? 'Loading...' : 'Cari'}
              </span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
          {/* Search Results Info */}
          <div className="text-xs sm:text-sm text-gray-500 flex-1 sm:flex-none">
            {loading ? (
              <span className="flex items-center">
                <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-blue-500 mr-1 sm:mr-2"></div>
                <span className="hidden sm:inline">Loading...</span>
              </span>
            ) : (
              `${totalResults.toLocaleString('id-ID')} data`
            )}
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
              showFilters 
                ? 'bg-green-100 text-blue-700 border border-blue-200' 
                : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
            }`}
            disabled={loading}
          >
            <FiFilter className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          
          {(searchTerm || localSearchTerm) && (
            <button
              onClick={onReset}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-xs sm:text-sm px-2"
              disabled={loading}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Simplified Filters */}
      <div
        className="overflow-hidden"
      >
        {showFilters && (
          <div className="pt-4 border-t border-gray-100 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* Sort By */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Urutkan
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm"
                  disabled={loading}
                  aria-label="Pilih field untuk sorting"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Urutan
                </label>
                <button
                  onClick={toggleSortOrder}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 hover:bg-gray-50 transition-colors text-sm"
                  disabled={loading}
                >
                  <span>{sortOrder === 'asc' ? 'A → Z' : 'Z → A'}</span>
                  <svg 
                    className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Page Size */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Per halaman
                </label>
                <select
                  value={pageSize}
                  onChange={(e) => onPageSizeChange(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm"
                  disabled={loading}
                  aria-label="Pilih jumlah data per halaman"
                >
                  {pageSizeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}