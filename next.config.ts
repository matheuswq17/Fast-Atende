import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
