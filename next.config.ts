import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-avatar"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
