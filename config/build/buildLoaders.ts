import { RuleSetRule } from 'webpack';

import { buildBabelLoader, buildCssLoader, buildFileLoader, buildSvgLoader } from './loaders';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();
  const codeBabelLoader = buildBabelLoader(options);
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const cssLoader = buildCssLoader(options);

  return [fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, cssLoader];
}
