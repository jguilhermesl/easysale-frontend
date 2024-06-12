/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    appDir: true
  },
  images: {
    domains: ['www.thespruceeats.com'],
  },
};

export default nextConfig;

