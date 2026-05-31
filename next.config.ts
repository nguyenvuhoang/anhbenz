import type { NextConfig } from 'next';
import createWithVercelToolbar from '@vercel/toolbar/plugins/next';

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

const withVercelToolbar = createWithVercelToolbar();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
      },
      {
        protocol: 'https',
        hostname: 'api.jits.com.vn',
      },
      {
        protocol: 'https',
        hostname: 'www.dmca.com',
      },
      {
        protocol: 'https',
        hostname: 'images.dmca.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'api.jits.com.vn',
        port: '4001',
      },
      {
        protocol: 'https',
        hostname: 'jitsapi.jits.com.vn',
        port: '5555',
      },
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
  }),
};

export default withVercelToolbar(withPWA(nextConfig));
