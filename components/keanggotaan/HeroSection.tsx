'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  totalActiveMembers: number;
}

export default function HeroSection({ totalActiveMembers }: HeroSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 sm:py-20 mb-8 overflow-hidden"
    >
      {/* Enhanced Background with SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        {/* Simple SVG Background Elements */}
        <svg className="absolute top-10 left-10 w-16 h-16 text-green-400/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
        
        <svg className="absolute top-20 right-20 w-12 h-12 text-emerald-400/15" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8L16 12L10 16V8Z" />
        </svg>
        
        <svg className="absolute bottom-16 right-16 w-20 h-20 text-green-300/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
          <path d="M17 12H15V17H17V12ZM13 7H11V17H13V7ZM9 10H7V17H9V10Z" />
        </svg>
        
        <svg className="absolute bottom-10 left-16 w-14 h-14 text-emerald-300/15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H15.5L19 6.5V9H21ZM7 13C8.1 13 9 13.9 9 15S8.1 17 7 17 5 16.1 5 15 5.9 13 7 13ZM19 17C19 18.1 18.1 19 17 19S15 18.1 15 17 15.9 15 17 15 19 15.9 19 17Z" />
        </svg>
        
        {/* Additional SVG Elements */}
        {/* Database Icon */}
        <svg className="absolute top-1/4 right-1/4 w-10 h-10 text-green-200/12" fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12"/>
          <path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5"/>
        </svg>
        
        {/* Shield Icon */}
        <svg className="absolute top-1/3 left-1/5 w-8 h-8 text-emerald-200/18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
        </svg>
        
        {/* ID Card Icon */}
        <svg className="absolute bottom-1/4 right-1/5 w-12 h-12 text-green-300/8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM6 10H8V12H6V10ZM6 14H8V16H6V14ZM10 10H18V12H10V10ZM10 14H16V16H10V14Z"/>
        </svg>
        
        {/* People Group Icon */}
        <svg className="absolute top-16 left-1/3 w-14 h-14 text-emerald-400/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4ZM16 14C18.67 14 24 15.33 24 18V20H8V18C8 15.33 13.33 14 16 14ZM8 4C10.2 4 12 5.8 12 8S10.2 12 8 12 4 10.2 4 8 5.8 4 8 4ZM8 14C10.67 14 16 15.33 16 18V20H0V18C0 15.33 5.33 14 8 14Z"/>
        </svg>
        
        {/* Document Icon */}
        <svg className="absolute bottom-20 left-1/4 w-9 h-9 text-green-400/12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"/>
        </svg>
        
        {/* Search Icon */}
        <svg className="absolute top-2/3 right-1/6 w-7 h-7 text-emerald-300/15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z"/>
        </svg>
        
        {/* Floating dots */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-green-300 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-green-200 rounded-full opacity-50 animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-emerald-200 rounded-full opacity-35 animate-pulse animation-delay-1500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Simplified Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 border border-white/20 mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Database Keanggotaan
          </motion.div>

          {/* Simplified Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            BUJP Jawa Barat
          </motion.h1>

          {/* Simplified Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto"
          >
            Sistem pengelolaan data keanggotaan BUJP terintegrasi
          </motion.p>

          {/* Simplified Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-green-100"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm sm:text-base font-medium">
                <span className="text-xl font-bold text-white">{totalActiveMembers}</span> Anggota Aktif
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-green-300/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm sm:text-base font-medium">Real-time Data</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}