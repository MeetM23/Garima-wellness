/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows serving images smoothly in all environments
  },
};

module.exports = nextConfig;

