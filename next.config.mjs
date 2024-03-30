/** @type {import('next').NextConfig} */

const isDevEnv = process.env.NODE_ENV === "development";

const nextConfig = {
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  generateEtags: true,

  eslint: {
    dirs: ["."],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: !!isDevEnv,
  },

  sassOptions: {
    additionalData: `
      @import "@styles/_variables.scss";
      @import "@styles/_tools.scss";
      @import "@styles/_utils.scss";
    `,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      return config;
    }

    var isProduction = config.mode === "production";

    if (!isProduction) {
      return config;
    }

    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    config.optimization.splitChunks.maxAsyncRequests = 8;
    config.optimization.splitChunks.maxInitialRequests = 8;

    return config;
  },
};

export default nextConfig;
