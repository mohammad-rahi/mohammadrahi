/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "api.lorem.space", "api.escuelajs.co", "placeimg.com", "firebasestorage.googleapis.com", "i.imgur.com", "encrypted-tbn0.gstatic.com"]
  }
}

module.exports = nextConfig