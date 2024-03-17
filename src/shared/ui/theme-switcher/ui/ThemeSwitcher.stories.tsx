import type { Meta, StoryObj } from '@storybook/react';

import { ETheme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook';

import { ThemeSwitcher } from '.';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
};
