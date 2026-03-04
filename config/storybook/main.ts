import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  webpackFinal: async webpackConfig => {
    if (webpackConfig.resolve) {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@': path.resolve(__dirname, '../../src'),
        entities: path.resolve(__dirname, '../../src/entities'),
        shared: path.resolve(__dirname, '../../src/shared'),
        widgets: path.resolve(__dirname, '../../src/widgets'),
        features: path.resolve(__dirname, '../../src/features'),
        pages: path.resolve(__dirname, '../../src/pages'),
      };

      webpackConfig.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', '.json'];
    }

    return webpackConfig;
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  docs: {
    autodocs: 'tag',
  },
};

export default config;
