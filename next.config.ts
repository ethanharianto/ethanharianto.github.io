import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/projects/:slug", destination: "/work/:slug", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/skills", destination: "/cv", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      {
        source: "/resume",
        destination: "/Ethan_Harianto_Resume.pdf",
        permanent: true,
      },
      {
        source: "/resume.pdf",
        destination: "/Ethan_Harianto_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default config;
