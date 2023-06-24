/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.inaturalist.org",
      "inaturalist-open-data.s3.amazonaws.com",
    ],
  },
  transpilePackages: ["flowbite-react", "flowbite", "react-icons"],

  webpack: (config) => {
    config.externals = [...config.externals, "bcryptjs"];
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
