import { createSelector } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';

import { RootState } from '@/app/providers';

export const getCounter = (state: RootState) => state.entities.counter;

export const getCounterValue: Selector<RootState, number> = createSelector(
  getCounter,
  ({ value }) => value
);
