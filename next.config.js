/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.inaturalist.org",
      "inaturalist-open-data.s3.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
  eslint: {
    dirs: ["app", "app/**/*.js", "app/**/*.jsx", "app/**/*.ts", "app/**/*.tsx"],
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["react-icons", "@radix-ui"],
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
    "@radix-ui": {
      transform: "@radix-ui/{{member}}",
    },
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
  productionBrowserSourceMaps: true,
};

module.exports = {
  ...nextConfig,
  compiler: {
    styledComponents: {
      minify: true,
      pure: true,
      ssr: true,
    },
  },
  swcMinify: false,
};
