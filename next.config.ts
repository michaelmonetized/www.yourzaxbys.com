import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.convex.site" },
      { protocol: "https", hostname: "*.convex.cloud" },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "hustle-launch",
  project: "shipthing",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
