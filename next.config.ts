import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.ganipedia.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
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
  
  // Experimental features untuk form uploads
  experimental: {
    // Disable body size warnings untuk form uploads
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
