import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during Vercel builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignore TypeScript type errors during Vercel builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
