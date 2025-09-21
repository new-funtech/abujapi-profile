'use client';

import { FiSearch, FiDatabase, FiRefreshCw } from 'react-icons/fi';

interface EmptyStateProps {
  title?: string;
  description?: string;
  searchTerm?: string;
  onReset?: () => void;
  showResetButton?: boolean;
}

export default function EmptyState({ 
  title = "Tidak ada data ditemukan",
  description = "Tidak ada data BUJP yang sesuai dengan kriteria pencarian Anda.",
  searchTerm,
  onReset,
  showResetButton = true
}: EmptyStateProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center"
    >
      {/* Empty Icon */}
      <div
        className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center"
      >
        {searchTerm ? (
          <FiSearch className="w-12 h-12 text-gray-400" />
        ) : (
          <FiDatabase className="w-12 h-12 text-gray-400" />
        )}
      </div>

      {/* Title and Description */}
      <div
        className="space-y-4 mb-8"
      >
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 mb-4">{description}</p>
          
          {searchTerm && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700">
                Pencarian untuk: <span className="font-medium text-gray-900">&ldquo;{searchTerm}&rdquo;</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Suggestions */}
      <div
        className="space-y-4"
      >
        <div className="text-left max-w-md mx-auto">
          <p className="text-sm font-medium text-gray-700 mb-2">Saran:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Periksa ejaan kata kunci pencarian</li>
            <li>• Gunakan kata kunci yang lebih umum</li>
            <li>• Hapus filter yang tidak perlu</li>
            <li>• Coba pencarian dengan kriteria yang berbeda</li>
          </ul>
        </div>

        {/* Reset Button */}
        {showResetButton && onReset && (
          <button
            onClick={onReset}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <FiRefreshCw className="w-5 h-5 mr-2" />
            Reset Filter & Pencarian
          </button>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="mt-8 flex justify-center space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}