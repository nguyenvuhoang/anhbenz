import type { NextConfig } from 'next';
import withVercelToolbar from '@vercel/toolbar/plugins/next';

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

const createWithVercelToolbar = withVercelToolbar;
const withToolbar = createWithVercelToolbar();

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
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
  }),
};

export default withToolbar(withPWA(nextConfig));
