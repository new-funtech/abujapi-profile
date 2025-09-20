'use client';

import { motion } from 'framer-motion';
import { FiAlertTriangle, FiRefreshCw, FiHome } from 'react-icons/fi';

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
  onGoHome?: () => void;
}

export default function ErrorState({ error, onRetry, onGoHome }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center"
        >
          <FiAlertTriangle className="w-12 h-12 text-red-600" />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900">Oops! Terjadi Kesalahan</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
          <p className="text-gray-600">
            Mohon maaf atas ketidaknyamanan ini. Silakan coba lagi atau hubungi administrator.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-3"
        >
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FiRefreshCw className="w-5 h-5 mr-2" />
              Coba Lagi
            </button>
          )}
          
          {onGoHome && (
            <button
              onClick={onGoHome}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <FiHome className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </button>
          )}
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-sm text-gray-500"
        >
          <p>Jika masalah berlanjut, silakan hubungi:</p>
          <p className="font-medium">Administrator Sistem ABUJAPI</p>
        </motion.div>
      </motion.div>
    </div>
  );
}