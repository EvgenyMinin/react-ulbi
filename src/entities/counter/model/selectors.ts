import { buildSelector } from '@/shared/lib';

export const [useCounterValue, getCounterValue] = buildSelector(
  state => state.entities.counter.value
);
