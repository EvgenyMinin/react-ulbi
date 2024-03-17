import { IStateSchema } from 'app/providers/StoreProvider';

import { getCounter, getCounterValue } from '../selectors';

describe('counter selectors works correctly', () => {
  const state: IStateSchema = {
    counter: { value: 10 },
  };

  it('Should return counter', () => {
    expect(getCounter(state)).toEqual({ value: 10 });
  });

  it('Should return counter value', () => {
    expect(getCounterValue(state)).toEqual(10);
  });
});
