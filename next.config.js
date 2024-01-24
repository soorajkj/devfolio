/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles/abstracts")],
  },
};

module.exports = nextConfig;
