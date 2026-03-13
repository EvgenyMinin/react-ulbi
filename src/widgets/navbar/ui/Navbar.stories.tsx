import type { Meta, StoryObj } from '@storybook/react';

import { ETheme } from '@/app/providers/ThemeProvider';

import { ThemeDecorator } from '@/shared/config/storybook';

import { Navbar } from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
};
