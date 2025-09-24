'use client';

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


  return (
    <>
      {isOpen && data && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Clean Header */}
              <div className="relative bg-white border-b border-slate-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <FiUser className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900 mb-1">{data.bujp}</h2>
                      {data.no_kta && (
                        <p className="text-slate-600 text-sm">No. KTA: {data.no_kta}</p>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Tutup modal"
                  >
                    <FiX className="w-5 h-5 text-slate-500" />
                  </button>
                </div>

                {/* Clean Status Badge */}
                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border ${
                    isExpired(data.tgl_expired) 
                      ? 'text-red-700 bg-red-50 border-red-200' 
                      : 'text-green-700 bg-green-50 border-green-200'
                  }`}>
                    <span className="mr-2">{isExpired(data.tgl_expired) ? '⚠️' : '✓'}</span>
                    Status: {isExpired(data.tgl_expired) ? 'Kadaluarsa' : 'Aktif'}
                  </span>
                </div>
              </div>

              {/* Simple Content */}
              <div className="flex-1 p-6 overflow-y-auto min-h-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center">
                        <FiUser className="w-4 h-4 mr-2 text-slate-500" />
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
                      <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center">
                        <FiCalendar className="w-4 h-4 mr-2 text-slate-500" />
                        Informasi Tanggal
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FiCalendar className="w-4 h-4 text-slate-400" />
                            <div>
                              <p className="text-sm font-medium text-slate-900">Tanggal Pendaftaran</p>
                              <p className="text-sm text-slate-600">{formatDate(data.tgl_daftar)}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FiClock className="w-4 h-4 text-slate-400" />
                            <div>
                              <p className="text-sm font-medium text-slate-900">Masa Berlaku</p>
                              <p className="text-sm text-slate-600">{formatDate(data.tgl_expired)}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            isExpired(data.tgl_expired) 
                              ? 'text-red-700 bg-red-100' 
                              : 'text-green-700 bg-green-100'
                          }`}>
                            {isExpired(data.tgl_expired) ? 'Kadaluarsa' : 'Aktif'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center">
                        <FiMapPin className="w-4 h-4 mr-2 text-slate-500" />
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
                          value={Number(data.kode_pos).toFixed(0)} 
                          onCopy={() => copyToClipboard(Number(data.kode_pos).toFixed(0), 'kode_pos')}
                          copied={copiedField === 'kode_pos'}
                        />
                      )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Footer */}
              <div className="flex-shrink-0 border-t border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    Data diproteksi dan tidak dapat di-copy secara otomatis
                  </p>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
    <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900 mb-1">{label}</p>
        <p className={`text-sm text-slate-600 ${multiline ? 'whitespace-pre-wrap' : ''}`}>
          {value}
        </p>
      </div>
      <button
        onClick={onCopy}
        className={`ml-3 p-1.5 rounded-lg transition-all duration-200 ${
          copied 
            ? 'bg-green-100 text-green-600' 
            : 'bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-100'
        }`}
        title={copied ? 'Tersalin!' : 'Salin'}
      >
        {copied ? (
          <FiCheckCircle className="w-3.5 h-3.5" />
        ) : (
          <FiCopy className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}