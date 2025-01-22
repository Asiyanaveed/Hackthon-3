import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
        search: ''
      },
    ],
  },
  webpack: (config) => {
    console.log("Webpack Aliases:", config.resolve.alias);
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"), // Changed from @constant to @ for matching
    };
    return config;
  },
  

  
};

export default nextConfig;
