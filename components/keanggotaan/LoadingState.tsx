'use client';


export default function LoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div
        className="text-center"
      >
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-blue-400 rounded-full animate-pulse mx-auto"></div>
        </div>

        {/* Loading Text */}
        <div
          className="space-y-2"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Memuat Data</h2>
          <p className="text-gray-600">Sedang mengambil data keanggotaan BUJP...</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}