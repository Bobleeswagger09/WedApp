/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "wed-server.onrender.com", "ui-avatars.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wed-server.onrender.com",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
