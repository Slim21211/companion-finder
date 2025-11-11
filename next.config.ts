import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // Для production (остаётся Webpack)
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // Новый правильный способ для Turbopack (Next.js 15+)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "app/constants";`,
  },
};

export default nextConfig;
