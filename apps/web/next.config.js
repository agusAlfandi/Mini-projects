const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'img.daisyui.com' },
    ],
  },
};

module.exports = nextConfig;
