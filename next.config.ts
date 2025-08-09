import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {},
          },
        ],
        as: "*.js",
      },
    },
  },
  images: {
    domains: ["framerusercontent.com", "media.licdn.com"],
  },
};

export default nextConfig;
