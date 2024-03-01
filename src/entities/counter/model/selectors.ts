import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';

export const getCounter = (state: IStateSchema) => state.counter;

export const getCounterValue = createSelector(getCounter, ({ value }) => value);
