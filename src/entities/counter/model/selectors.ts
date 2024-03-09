import { createSelector } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';

import { IStateSchema } from '@/app/providers/StoreProvider';

export const getCounter = (state: IStateSchema) => state.counter;

export const getCounterValue: Selector<IStateSchema, number> = createSelector(
  getCounter,
  ({ value }) => value
);
