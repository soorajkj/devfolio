import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "framerusercontent.com",
      },
      {
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
