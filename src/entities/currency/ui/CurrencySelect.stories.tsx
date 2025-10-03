import type { Meta, StoryObj } from '@storybook/react';

import { ECurrency } from 'shared/lib';

import { CurrencySelect } from './CurrencySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: ECurrency.RUB,
  },
};
