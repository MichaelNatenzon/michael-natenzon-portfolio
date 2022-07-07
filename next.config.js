/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: "https://storageapi.fleek.co/9af46b24-5f02-47d2-8630-e581e7c13aeb-bucket/",
  },
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
