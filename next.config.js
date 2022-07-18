/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    unoptimized: true,
  },
  env: {
    UD_CLIENT_ID: "fd23511f-f04f-424a-8fd0-feac9ed4ca8d",
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
