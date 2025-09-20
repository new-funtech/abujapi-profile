'use client';

import { useState } from 'react';
import { Bujp } from '@/types/interface';
import { useBujpData } from '@/hooks/useBujpData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import all components
import HeroSection from '@/components/keanggotaan/HeroSection';
import StatsCards from '@/components/keanggotaan/StatsCards';
import SearchBar from '@/components/keanggotaan/SearchBar';
import BujpTable from '@/components/keanggotaan/BujpTable';
import Pagination from '@/components/keanggotaan/Pagination';
import DetailModal from '@/components/keanggotaan/DetailModal';
import LoadingState from '@/components/keanggotaan/LoadingState';
import ErrorState from '@/components/keanggotaan/ErrorState';
import EmptyState from '@/components/keanggotaan/EmptyState';

export default function KeanggotaanPage() {
  // State for modal
  const [selectedBujp, setSelectedBujp] = useState<Bujp | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use custom hook for data management
  const {
    data,
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
    // nextPage,
    // prevPage,
    setSearchTerm,
    setSortBy,
    setSortOrder,
    setPageSize,
    resetFilters,
    refetch,
    totalActiveMembers,
    totalExpiredMembers,
    hasNextPage,
    hasPrevPage,
    startIndex,
    endIndex,
  } = useBujpData({ initialPageSize: 10 });

  // Handle view detail
  const handleViewDetail = (item: Bujp) => {
    setSelectedBujp(item);
    setIsModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBujp(null);
  };

  // Handle go home
  const handleGoHome = () => {
    window.location.href = '/';
  };

  // Show loading state
  if (loading && data.length === 0) {
    return <LoadingState />;
  }

  // Show error state
  if (error && data.length === 0) {
    return (
      <ErrorState 
        error={error} 
        onRetry={refetch}
        onGoHome={handleGoHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection totalActiveMembers={totalActiveMembers} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Stats Cards */}
        <StatsCards
          totalData={totalData}
          totalActiveMembers={totalActiveMembers}
          totalExpiredMembers={totalExpiredMembers}
          loading={loading}
        />

        {/* Search Bar */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onReset={resetFilters}
          totalResults={totalData}
          loading={loading}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={setSortBy}
          onSortOrderChange={setSortOrder}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />

        {/* Content */}
        {data.length === 0 && !loading ? (
          <EmptyState
            searchTerm={searchTerm}
            onReset={resetFilters}
          />
        ) : (
          <>
            {/* Table */}
            <BujpTable
              data={data}
              onViewDetail={handleViewDetail}
              loading={loading}
              startIndex={startIndex}
              endIndex={endIndex}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                  hasNextPage={hasNextPage}
                  hasPrevPage={hasPrevPage}
                  startIndex={startIndex}
                  endIndex={endIndex}
                  totalData={totalData}
                  loading={loading}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedBujp}
      />
    </div>
  );
}