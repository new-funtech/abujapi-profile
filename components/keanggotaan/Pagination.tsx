'use client';

import { FiChevronLeft, FiChevronRight, FiMoreHorizontal } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  startIndex: number;
  endIndex: number;
  totalData: number;
  loading?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hasNextPage,
  hasPrevPage,
  startIndex,
  endIndex,
  totalData,
  loading = false
}: PaginationProps) {
  // Generate page numbers to show
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  const handlePrevPage = () => {
    if (hasPrevPage && !loading) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage && !loading) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage && !loading) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 sm:px-6 py-4"
    >
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between gap-4">
        {/* Data Info */}
        <div className="text-xs sm:text-sm text-gray-700 order-2 sm:order-1 text-center sm:text-left">
          Menampilkan{' '}
          <span className="font-medium text-gray-900">{startIndex}</span>
          {' '}-{' '}
          <span className="font-medium text-gray-900">{endIndex}</span>
          {' '}dari{' '}
          <span className="font-medium text-gray-900">{totalData.toLocaleString('id-ID')}</span>
          {' '}data
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-1 order-1 sm:order-2 w-full sm:w-auto justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrevPage}
            disabled={!hasPrevPage || loading}
            className={`inline-flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
              hasPrevPage && !loading
                ? 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                : 'text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed'
            }`}
            aria-label="Halaman sebelumnya"
          >
            <FiChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-0 sm:mr-1" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-0.5 sm:gap-1 mx-1 sm:mx-2">
            {visiblePages.map((page, index) => {
              if (page === '...') {
                return (
                  <div
                    key={`dots-${index}`}
                    className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
                  >
                    <FiMoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                );
              }

              const isCurrentPage = page === currentPage;
              
              return (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  disabled={loading}
                  className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                    isCurrentPage
                      ? 'text-white bg-blue-600 border border-blue-600 shadow-sm'
                      : loading
                      ? 'text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                  }`}
                  aria-label={`Halaman ${page}`}
                  aria-current={isCurrentPage ? 'page' : undefined}
                >
                  {loading && isCurrentPage ? (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    page
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={!hasNextPage || loading}
            className={`inline-flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
              hasNextPage && !loading
                ? 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                : 'text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed'
            }`}
            aria-label="Halaman selanjutnya"
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0 sm:ml-1" />
          </button>
        </div>
      </div>

      {/* Quick Jump (Desktop only) */}
      <div className="hidden lg:flex items-center justify-center mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Lompat ke halaman:</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages && !loading) {
                handlePageClick(page);
              }
            }}
            disabled={loading}
            className="w-16 px-2 py-1 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Nomor halaman"
          />
          <span>dari {totalPages}</span>
        </div>
      </div>

      {/* Quick Navigation Buttons */}
      <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1 || loading}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            currentPage === 1 || loading
              ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
              : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
          }`}
        >
          Pertama
        </button>
        
        <button
          onClick={() => handlePageClick(Math.max(1, currentPage - 5))}
          disabled={currentPage <= 5 || loading}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            currentPage <= 5 || loading
              ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
              : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
          }`}
        >
          -5
        </button>

        <button
          onClick={() => handlePageClick(Math.min(totalPages, currentPage + 5))}
          disabled={currentPage >= totalPages - 4 || loading}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            currentPage >= totalPages - 4 || loading
              ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
              : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
          }`}
        >
          +5
        </button>

        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages || loading}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            currentPage === totalPages || loading
              ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
              : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
          }`}
        >
          Terakhir
        </button>
      </div>
    </div>
  );
}