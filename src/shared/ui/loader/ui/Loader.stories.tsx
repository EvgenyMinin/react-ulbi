import type { Meta, StoryObj } from '@storybook/react';

import { ETheme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook';

import { Loader } from '.';

const meta = {
  title: 'shared/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
};
