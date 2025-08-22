// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.ganipedia.xyz",
        pathname: "*",
      },
    ],
  },
};

export default nextConfig;
