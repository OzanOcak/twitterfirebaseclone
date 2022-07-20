/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "help.twitter.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
      "randomuser.me",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
