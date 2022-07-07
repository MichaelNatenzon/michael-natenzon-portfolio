/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const defaultConfig = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "~@styles/variables.scss";`,
    };
  }
  return defaultConfig;
};

(module.exports = nextConfig), defaultConfig;

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
