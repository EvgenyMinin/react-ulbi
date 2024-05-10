import { StoryFn } from '@storybook/react';

import { StoreProvider } from 'app/providers';

export const StoreDecorator = (StoryComponent: StoryFn) => (
  <StoreProvider>
    <StoryComponent />
  </StoreProvider>
);
