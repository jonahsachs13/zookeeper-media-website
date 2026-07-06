import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.transistorcdn.com",
      },
    ],
  },
};

export default nextConfig;
