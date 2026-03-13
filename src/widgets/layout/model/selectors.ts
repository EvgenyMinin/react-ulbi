import { createSelector, Selector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers';

export const getLayoutState = (state: RootState) => state.widgets.layout;

export const scrollSelector: Selector<RootState, number> = createSelector(
  [getLayoutState, (state: RootState, path: string) => path],
  ({ scroll }, path: string) => scroll[path] || 0
);
