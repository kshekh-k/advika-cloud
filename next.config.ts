/** @type {import('next').NextConfig} */
// import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        pathname: '**',
        hostname: '**',
      },
      {
        protocol: 'http',
        pathname: '**',
        hostname: '**',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
