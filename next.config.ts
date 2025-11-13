import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname, // ✅ ensures correct workspace root
  images: {
    domains: ["files.stripe.com"],   // your existing config
  },
};

export default nextConfig;
