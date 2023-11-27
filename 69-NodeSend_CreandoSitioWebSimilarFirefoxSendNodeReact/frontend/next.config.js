/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // AAC
  env: {
    backendURL: 'http://localhost:4000'
  }
}

module.exports = nextConfig
