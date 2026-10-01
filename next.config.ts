import type { NextConfig } from "next";

// Fully static export, hosted on GitHub Pages (free, no request cap).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
