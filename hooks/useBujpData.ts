import { useState, useEffect, useMemo } from 'react';
import { Bujp, BujpPaginationData } from '@/types/interface';
import { fetchBujps } from '@/lib/api';

interface UseBujpDataProps {
  initialPageSize?: number;
}

interface UseBujpDataReturn {
  data: Bujp[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalData: number;
  searchTerm: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  pageSize: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setSearchTerm: (term: string) => void;
  setSortBy: (field: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setPageSize: (size: number) => void;
  resetFilters: () => void;
  refetch: () => void;
  // Computed values
  totalActiveMembers: number;
  totalExpiredMembers: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  startIndex: number;
  endIndex: number;
}

export const useBujpData = ({ initialPageSize = 5 }: UseBujpDataProps = {}): UseBujpDataReturn => {
  const [data, setData] = useState<Bujp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('nama');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [pageSize, setPageSize] = useState(initialPageSize);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Use the existing API function from lib/api.ts
      // Note: fetchBujps returns pagination data directly
      const paginationData: BujpPaginationData = await fetchBujps(
        currentPage,
        pageSize,
        searchTerm
      );
      
      if (paginationData) {
        setData(paginationData.data || []);
        setTotalPages(paginationData.last_page || 1);
        setTotalData(paginationData.total || 0);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (err) {
      console.error('Error fetching BUJP data:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setData([]);
      setTotalPages(1);
      setTotalData(0);
    } finally {
      setLoading(false);
    }
  };

  // Effect untuk fetch data saat dependencies berubah
  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize, searchTerm]); // Removed sortBy, sortOrder temporarily

  // Reset ke page 1 saat search berubah
  useEffect(() => {
    if (currentPage !== 1 && searchTerm) {
      setCurrentPage(1);
    }
  }, [searchTerm]); // Removed sortBy, sortOrder temporarily

  // Computed values dengan client-side sorting
  const computedValues = useMemo(() => {
    const now = new Date();
    
    // Apply client-side sorting if needed
    const sortedData = [...data];
    if (sortBy && data.length > 0) {
      sortedData.sort((a, b) => {
        let aValue = '';
        let bValue = '';
        
        switch (sortBy) {
          case 'bujp':
            aValue = a.bujp || '';
            bValue = b.bujp || '';
            break;
          case 'tgl_daftar':
            aValue = a.tgl_daftar || '';
            bValue = b.tgl_daftar || '';
            break;
          case 'tgl_expired':
            aValue = a.tgl_expired || '';
            bValue = b.tgl_expired || '';
            break;
          case 'provinsi':
            aValue = a.provinsi || '';
            bValue = b.provinsi || '';
            break;
          case 'kabupaten_kota':
            aValue = a.kabupaten_kota || '';
            bValue = b.kabupaten_kota || '';
            break;
          default:
            aValue = a.bujp || '';
            bValue = b.bujp || '';
        }
        
        const result = aValue.localeCompare(bValue);
        return sortOrder === 'desc' ? -result : result;
      });
    }

    const totalActiveMembers = sortedData.filter(item => {
      const expDate = new Date(item.tgl_expired || '');
      return expDate > now;
    }).length;

    const totalExpiredMembers = sortedData.filter(item => {
      const expDate = new Date(item.tgl_expired || '');
      return expDate <= now;
    }).length;

    const hasNextPage = currentPage < totalPages;
    const hasPrevPage = currentPage > 1;
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalData);

    return {
      sortedData,
      totalActiveMembers,
      totalExpiredMembers,
      hasNextPage,
      hasPrevPage,
      startIndex,
      endIndex,
    };
  }, [data, currentPage, totalPages, pageSize, totalData, sortBy, sortOrder]);

  // Navigation functions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (computedValues.hasNextPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (computedValues.hasPrevPage) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSortBy('nama');
    setSortOrder('asc');
    setCurrentPage(1);
  };

  // Manual refetch
  const refetch = () => {
    fetchData();
  };

  return {
    data: computedValues.sortedData, // Use sorted data instead of raw data
    loading,
    error,
    currentPage,
    totalPages,
    totalData,
    searchTerm,
    sortBy,
    sortOrder,
    pageSize,
    goToPage,
    nextPage,
    prevPage,
    setSearchTerm,
    setSortBy,
    setSortOrder,
    setPageSize,
    resetFilters,
    refetch,
    ...computedValues,
  };
};
