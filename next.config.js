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
  return defaultConfig;
};

(module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: "/api/:path*",
          destination: `${API_URL}/:path*`,
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/api/:path*",
          destination: `${API_URL}/:path*`,
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/api/:path*",
          destination: `${API_URL}/:path*`,
        },
      ],
    };
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["themichaelnatenzon.com"],
    path: "themichaelnatenzon.com/images",
  },
}),
  defaultConfig;
