/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/manifest.json$/],
  disable: !isProd,
});
const staticExportConfig = {
  trailingSlash: true,
  output: "export", // static export
  distDir: "out", // static export
  assetPrefix: isProd ? process.env.SITE_URL : "./", //static export
};
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [""],
    minimumCacheTTL: 60,
  },
  // output: 'standalone', // dockerize
  staticExportConfig,
};
if (isProd) {
  // Modify Webpack configuration for production
  nextConfig.webpack = (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      };
    }
    return config;
  };
}

module.exports = withPWA(nextConfig);
