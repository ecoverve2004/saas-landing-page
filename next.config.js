/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    HOTJAR_ID: process.env.HOTJAR_ID,
  },
}

module.exports = nextConfig