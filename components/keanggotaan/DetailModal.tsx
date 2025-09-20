'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiMapPin, FiCalendar, FiClock, FiCopy, FiCheckCircle } from 'react-icons/fi';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Bujp } from '@/types/interface';
import { useAntiCapture } from '@/hooks/useAntiCapture';
import { useEffect, useState } from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Bujp | null;
}

export default function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Enable anti-capture protection when modal is open
  useAntiCapture({
    enableRightClickBlock: isOpen,
    enableTextSelection: false,
    enableDevToolsBlock: isOpen,
    enablePrintScreen: isOpen,
    enableDragDrop: false,
    enableCopyPaste: false,
  });

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    try {
      return format(new Date(dateString), 'dd MMMM yyyy', { locale: id });
    } catch {
      return '-';
    }
  };

  const isExpired = (dateString?: string) => {
    if (!dateString) return false;
    try {
      return new Date(dateString) <= new Date();
    } catch {
      return false;
    }
  };

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const getStatusInfo = (expiredDate?: string) => {
    const expired = isExpired(expiredDate);
    return {
      status: expired ? 'Kadaluarsa' : 'Aktif',
      color: expired ? 'text-red-700 bg-red-50 border-red-200' : 'text-green-700 bg-green-50 border-green-200',
      icon: expired ? '❌' : '✅'
    };
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!data) return null;

  const statusInfo = getStatusInfo(data.tgl_expired);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Simple Header */}
              <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <FiUser className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{data.bujp}</h2>
                      {data.no_kta && (
                        <p className="text-green-100">No. KTA: {data.no_kta}</p>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Tutup modal"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Simple Status Badge */}
                <div className="mt-4">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${statusInfo.color}`}>
                    <span className="mr-2">{statusInfo.icon}</span>
                    Status: {statusInfo.status}
                  </span>
                </div>
              </div>

              {/* Simple Content */}
              <div className="flex-1 p-6 overflow-y-auto min-h-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FiUser className="w-5 h-5 mr-2 text-green-600" />
                        Informasi Dasar
                      </h3>
                      
                      <div className="space-y-4">
                        <InfoField
                          label="Nama BUJP"
                          value={data.bujp}
                          onCopy={() => copyToClipboard(data.bujp, 'bujp')}
                          copied={copiedField === 'bujp'}
                        />
                        
                        {data.penanggung_jawab && (
                          <InfoField
                            label="Penanggung Jawab"
                            value={data.penanggung_jawab}
                            onCopy={() => copyToClipboard(data.penanggung_jawab!, 'penanggung_jawab')}
                            copied={copiedField === 'penanggung_jawab'}
                          />
                        )}
                        
                        {data.jabatan && (
                          <InfoField
                            label="Jabatan"
                            value={data.jabatan}
                            onCopy={() => copyToClipboard(data.jabatan!, 'jabatan')}
                            copied={copiedField === 'jabatan'}
                          />
                        )}
                      </div>
                    </div>

                    {/* Dates Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FiCalendar className="w-5 h-5 mr-2 text-green-600" />
                        Informasi Tanggal
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FiCalendar className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">Tanggal Pendaftaran</p>
                              <p className="text-sm text-gray-600">{formatDate(data.tgl_daftar)}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FiClock className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">Masa Berlaku</p>
                              <p className="text-sm text-gray-600">{formatDate(data.tgl_expired)}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                            {statusInfo.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FiMapPin className="w-5 h-5 mr-2 text-green-600" />
                        Informasi Alamat
                      </h3>
                      
                      <div className="space-y-4">
                        {data.alamat && (
                          <InfoField
                            label="Alamat Lengkap"
                            value={data.alamat}
                            onCopy={() => copyToClipboard(data.alamat!, 'alamat')}
                            copied={copiedField === 'alamat'}
                            multiline
                          />
                        )}
                        
                        {data.kelurahan && (
                          <InfoField
                            label="Kelurahan"
                            value={data.kelurahan}
                            onCopy={() => copyToClipboard(data.kelurahan!, 'kelurahan')}
                            copied={copiedField === 'kelurahan'}
                          />
                        )}
                        
                        {data.kecamatan && (
                          <InfoField
                            label="Kecamatan"
                            value={data.kecamatan}
                            onCopy={() => copyToClipboard(data.kecamatan!, 'kecamatan')}
                            copied={copiedField === 'kecamatan'}
                          />
                        )}
                        
                        {data.kabupaten_kota && (
                          <InfoField
                            label="Kabupaten/Kota"
                            value={data.kabupaten_kota}
                            onCopy={() => copyToClipboard(data.kabupaten_kota!, 'kabupaten_kota')}
                            copied={copiedField === 'kabupaten_kota'}
                          />
                        )}
                        
                        {data.provinsi && (
                          <InfoField
                            label="Provinsi"
                            value={data.provinsi}
                            onCopy={() => copyToClipboard(data.provinsi!, 'provinsi')}
                            copied={copiedField === 'provinsi'}
                          />
                        )}
                        
                        {data.kode_pos && (
                          <InfoField
                            label="Kode Pos"
                            value={data.kode_pos}
                            onCopy={() => copyToClipboard(data.kode_pos!, 'kode_pos')}
                            copied={copiedField === 'kode_pos'}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Footer */}
              <div className="flex-shrink-0 border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Data diproteksi dan tidak dapat di-copy secara otomatis
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Helper component for information fields
interface InfoFieldProps {
  label: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
  multiline?: boolean;
}

function InfoField({ label, value, onCopy, copied, multiline = false }: InfoFieldProps) {
  return (
    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 mb-1">{label}</p>
        <p className={`text-sm text-gray-600 ${multiline ? 'whitespace-pre-wrap' : ''}`}>
          {value}
        </p>
      </div>
      <button
        onClick={onCopy}
        className={`ml-3 p-2 rounded-lg transition-all duration-200 ${
          copied 
            ? 'bg-green-100 text-green-600' 
            : 'bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-100'
        }`}
        title={copied ? 'Tersalin!' : 'Salin'}
      >
        {copied ? (
          <FiCheckCircle className="w-4 h-4" />
        ) : (
          <FiCopy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}