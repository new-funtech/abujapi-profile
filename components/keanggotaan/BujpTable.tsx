'use client';

import { FiEye, FiMapPin, FiUser, FiCalendar, FiClock } from 'react-icons/fi';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Bujp } from '@/types/interface';

interface BujpTableProps {
  data: Bujp[];
  onViewDetail: (item: Bujp) => void;
  loading?: boolean;
  startIndex: number;
  endIndex: number;
}

export default function BujpTable({ 
  data, 
  onViewDetail, 
  loading = false,
  startIndex,
  endIndex 
}: BujpTableProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    try {
      return format(new Date(dateString), 'dd MMM yyyy', { locale: id });
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

  const getStatusBadge = (expiredDate?: string) => {
    const expired = isExpired(expiredDate);
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        expired 
          ? 'bg-red-100 text-red-800' 
          : 'bg-green-100 text-green-800'
      }`}>
        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          expired ? 'bg-red-500' : 'bg-green-500'
        }`}></div>
        {expired ? 'Kadaluarsa' : 'Aktif'}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="w-20 h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada data</h3>
        <p className="text-gray-500">Tidak ada data BUJP yang ditemukan untuk pencarian Anda.</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      {/* Table Header Info */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Data BUJP ({startIndex}-{endIndex})
          </h3>
          <div className="text-sm text-gray-500">
            Total: {data.length} data
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                BUJP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Penanggung Jawab
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lokasi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Daftar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Masa Berlaku
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <FiUser className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.bujp}
                      </div>
                      {item.no_kta && (
                        <div className="text-xs text-gray-500">KTA: {item.no_kta}</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{item.penanggung_jawab || '-'}</div>
                  {item.jabatan && (
                    <div className="text-xs text-gray-500">{item.jabatan}</div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-start">
                    <FiMapPin className="w-4 h-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-900">
                      <div>{item.kabupaten_kota || '-'}</div>
                      <div className="text-xs text-gray-500">{item.provinsi || '-'}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-900">
                    <FiCalendar className="w-4 h-4 text-gray-400 mr-2" />
                    {formatDate(item.tgl_daftar)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-900">
                    <FiClock className="w-4 h-4 text-gray-400 mr-2" />
                    {formatDate(item.tgl_expired)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(item.tgl_expired)}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onViewDetail(item)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <FiEye className="w-4 h-4 mr-1" />
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        <div className="divide-y divide-gray-200">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FiUser className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {item.bujp}
                    </h3>
                    {item.no_kta && (
                      <p className="text-xs text-gray-500 mt-1">KTA: {item.no_kta}</p>
                    )}
                  </div>
                </div>
                {getStatusBadge(item.tgl_expired)}
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                {item.penanggung_jawab && (
                  <div className="flex items-center text-sm text-gray-600">
                    <FiUser className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{item.penanggung_jawab}</span>
                    {item.jabatan && <span className="text-gray-400 ml-1">({item.jabatan})</span>}
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-600">
                  <FiMapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">{item.kabupaten_kota || '-'}, {item.provinsi || '-'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="truncate">Daftar: {formatDate(item.tgl_daftar)}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="truncate">Berlaku: {formatDate(item.tgl_expired)}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onViewDetail(item)}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <FiEye className="w-4 h-4 mr-2" />
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}