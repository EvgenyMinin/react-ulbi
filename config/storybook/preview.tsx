import type { Preview } from '@storybook/react';

import { ETheme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

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
  decorators: [StyleDecorator, ThemeDecorator(ETheme.LIGHT), RouterDecorator],
};

export default preview;
