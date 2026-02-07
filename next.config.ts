import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/website" : "",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better S3/CloudFront compatibility
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(",") ?? [],
};

export default nextConfig;
