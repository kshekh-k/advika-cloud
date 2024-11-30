import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "**",
        hostname: "**",
      },
      {
        protocol: "http",
        pathname: "**",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
