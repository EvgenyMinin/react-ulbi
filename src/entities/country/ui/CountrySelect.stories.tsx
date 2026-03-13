import type { Meta, StoryObj } from '@storybook/react';

import { ECountry } from '@/shared/lib';

import { CountrySelect } from './CurrencySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: ECountry.Russia,
  },
};
