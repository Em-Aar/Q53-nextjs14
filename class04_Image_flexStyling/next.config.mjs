/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "letsenhance.io",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "letsenhance.io",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "letsenhance.io",
        pathname: "/static/**",
      },
    ],
  },
};

export default nextConfig;
