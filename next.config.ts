import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.ganipedia.xyz",
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
