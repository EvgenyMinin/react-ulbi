import path from 'path';

import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));

  if (config.module?.rules) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.module.rules = config.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(
    new DefinePlugin({
      IS_DEV: JSON.stringify(true),
      API: JSON.stringify(''),
    })
  );

  return config;
};
