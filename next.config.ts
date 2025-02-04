import type { NextConfig } from "next";
import path from "path";

// Your Next.js configuration object
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // ✅ RandomUser API ko allow kiya
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },

  // Webpack Configuration
  webpack(config: { resolve: { alias: any } }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@opentelemetry/api': path.resolve(__dirname, 'node_modules/@opentelemetry/api'),
      // Add any other aliases you need here
    };
    return config;
  },
  



  
};

export default nextConfig;
