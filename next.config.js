/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "api.lorem.space", "api.escuelajs.co", "placeimg.com"]
  }
}

module.exports = nextConfig
