/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
    formats: ["image/avif", "image/webp"]
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
}

module.exports = nextConfig
