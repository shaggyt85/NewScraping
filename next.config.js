/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    esmExternals: "loose",
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.preferRelative = true;
    }
    return config;
  },
};

module.exports = nextConfig;
