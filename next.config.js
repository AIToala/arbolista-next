/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    //serverComponentsExternalPackages: ['bcrypt'],
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.inaturalist.org",
      "inaturalist-open-data.s3.amazonaws.com",
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
