import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Bilingual 404 for URLs outside /en and /it (the root layout lives in app/[lang]).
    globalNotFound: true,
  },
};

export default nextConfig;
