import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';

import { Button, EThemeButton } from '.';

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: EThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: EThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: EThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};
