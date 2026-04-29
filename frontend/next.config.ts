import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost:3000'],
  images: {
    domains: ['127.0.0.1'],
  },
};

export default nextConfig;
