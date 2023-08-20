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
      "res.cloudinary.com",
    ],
  },
  transpilePackages: ["flowbite-react", "flowbite", "react-icons", "@radix-ui"],
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
    "@radix-ui": {
      transform: "@radix-ui/{{member}}",
    },
  },
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
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
