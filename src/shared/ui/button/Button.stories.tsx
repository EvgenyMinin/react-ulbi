import type { Meta, StoryObj } from '@storybook/react';

import { ETheme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook';

import { Button, EButtonSize, EButtonTheme } from '.';

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
    theme: EButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Clear inverted',
    theme: EButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.XL,
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.M,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

export const Square: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: EButtonSize.L,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: EButtonSize.XL,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: EButtonSize.M,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};
