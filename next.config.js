/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "help.twitter.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
      "randomuser.me",
      "lh3.googleusercontent.com",
      "blog.hubspot.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
