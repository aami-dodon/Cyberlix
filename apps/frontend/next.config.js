/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@cynalitx/types', '@cynalitx/utils', '@cynalitx/ui'],
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
