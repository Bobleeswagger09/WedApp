/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "wed-server.onrender.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wed-server.onrender.com",
        pathname: "/images/**", // or "/**" if you want to allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
