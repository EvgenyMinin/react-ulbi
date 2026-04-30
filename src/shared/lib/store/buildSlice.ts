import { useMemo } from 'react';

import {
  bindActionCreators,
  createSlice,
  CreateSliceOptions,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { useAppDispatch } from '@/app/providers';

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
) => {
  const slice = createSlice(options);

  const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
  };

  return {
    ...slice,
    useActions,
  };
};
