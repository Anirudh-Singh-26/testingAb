import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TS errors on build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors on build
  },
};

export default nextConfig;
