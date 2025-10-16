import { RuleSetRule } from 'webpack';

import {
  buildBabelLoader,
  buildCssLoader,
  buildFileLoader,
  buildSvgLoader,
  buildTypeScriptLoader,
} from './loaders';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();
  const babelLoader = buildBabelLoader(isDev);
  const cssLoader = buildCssLoader(isDev);
  const typeScriptLoader = buildTypeScriptLoader();

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader];
}
