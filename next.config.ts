import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.ganipedia.xyz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.bpdabujapijabar.or.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'admin.bpdabujapijabar.or.id',
        port: '',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features untuk Next.js 15
  experimental: {
    // Disable body size warnings untuk form uploads
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
