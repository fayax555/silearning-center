/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['a4ida36s.directus.app', 'localhost'] },
}

module.exports = nextConfig
