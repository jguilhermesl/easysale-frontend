/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    appDir: false
  },
  images: {
    domains: ['www.thespruceeats.com'],
  },
};

export default nextConfig;

