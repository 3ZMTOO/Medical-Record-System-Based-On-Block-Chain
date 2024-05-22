/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
//
module.exports = {
  ...nextConfig,
  images: {
    domains: ["i.im.ge"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[hash].[ext]",
              outputPath: "static/media/",
              publicPath: "/_next/static/media/",
            },
          },
        ],
      });
    }
    return config;
  },
};
