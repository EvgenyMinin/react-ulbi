import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Text lorem ipsum',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem ipsum',
  },
};
