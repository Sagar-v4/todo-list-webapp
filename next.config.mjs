/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  env: {
    API_GATEWAY: process.env.API_GATEWAY,
  },
};

export default nextConfig;
