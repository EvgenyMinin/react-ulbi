import type { Preview } from '@storybook/react';

import { ETheme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
  TranslationDecorator,
  SuspenseDecorator,
  StoreDecorator,
} from '../../src/shared/config/storybook';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    TranslationDecorator,
    ThemeDecorator(ETheme.LIGHT),
    StoreDecorator,
    RouterDecorator,
    SuspenseDecorator,
  ],
};

export default preview;
