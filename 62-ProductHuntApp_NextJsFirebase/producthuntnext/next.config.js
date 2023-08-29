/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Info - Disabled SWC as replacement for Babel because of custom Babel configuration (Deshabilita!)
  // experimental: {
  //   forceSwcTransforms: true,
  // }
}

module.exports = nextConfig
