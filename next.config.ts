import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Italian is the default language; the old pages of the generalist site point to their closest successor.
    return [
      { source: "/", destination: "/it", permanent: false },
      { source: "/en/what-we-do", destination: "/en/services", permanent: true },
      { source: "/it/cosa-facciamo", destination: "/it/servizi", permanent: true },
      { source: "/en/founder", destination: "/en/about", permanent: true },
      { source: "/it/fondatore", destination: "/it/profilo", permanent: true },
      { source: "/en/publishing-rights", destination: "/en", permanent: true },
      { source: "/it/editoria-diritti", destination: "/it", permanent: true },
    ];
  },
};

export default nextConfig;
