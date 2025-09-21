'use client';

import { FiUsers, FiShield, FiClock } from 'react-icons/fi';
import { useMemo } from 'react';
import { IconType } from 'react-icons';

interface StatsCardsProps {
  totalData: number;
  totalActiveMembers: number;
  totalExpiredMembers: number;
  loading?: boolean;
}

interface StatCard {
  title: string;
  value: number;
  icon: IconType;
  color: string;
  bgColor: string;
  description: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCards({ 
  totalData, 
  totalActiveMembers, 
  totalExpiredMembers, 
  loading = false 
}: StatsCardsProps) {
  const statsData: StatCard[] = useMemo(() => [
    {
      title: 'Total BUJP',
      value: totalData,
      icon: FiUsers,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Total data'
    },
    {
      title: 'Aktif',
      value: totalActiveMembers,
      icon: FiShield,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'Anggota aktif'
    },
    {
      title: 'Kadaluarsa',
      value: totalExpiredMembers,
      icon: FiClock,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Sudah berakhir'
    }
  ], [totalData, totalActiveMembers, totalExpiredMembers]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
            <div className="animate-pulse">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl"></div>
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded mb-2"></div>
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
      {statsData.map((stat) => {
        const IconComponent = stat.icon;
        
        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 sm:p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <div
                className={`text-2xl sm:text-3xl font-bold ${stat.color} group-hover:scale-105 transition-transform duration-300`}
              >
                {stat.value.toLocaleString('id-ID')}
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {stat.title}
              </h3>
              <p className="text-xs text-gray-500">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}