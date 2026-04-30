import { RootState, useAppSelector } from '@/app/providers';

type TSelector<T> = (state: RootState) => T;
type TResult<T> = [() => T, TSelector<T>];

export const buildSelector = <T>(selector: TSelector<T>): TResult<T> => {
  const useSelectorHook = () => {
    return useAppSelector(selector);
  };

  return [useSelectorHook, selector];
};
