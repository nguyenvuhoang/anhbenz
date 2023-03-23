/** @type {import('next').NextConfig} */


const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
})


module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      '127.0.0.1:8000',
      'api.jits.com.vn',
      'www.dmca.com',
      'images.dmca.com',
      'img.freepik.com'
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
