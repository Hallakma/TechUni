/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "localhost"],
  },
};

module.exports = nextConfig;
