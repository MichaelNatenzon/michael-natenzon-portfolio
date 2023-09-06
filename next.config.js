const API_URL = "https://themichaelnatenzon.com";

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     loader: "custom",
//     unoptimized: true,
//   },
//   trailingSlash: true,
// };

const defaultConfig = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "~@styles/variables.scss";`,
    };
  }
  defaultConfig["reactStrictMode"] = true;
  defaultConfig["trailingSlash"] = true;
  defaultConfig["images"] = {
    loader: "custom",
    unoptimized: true,
  };
  return defaultConfig;
};

(module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/:path*`,
      },
    ];
  },
}),
  defaultConfig;
