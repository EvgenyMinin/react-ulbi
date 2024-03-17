import { counterActions, counterReducer, initialState } from '../slice';

describe('Counter reducers works correctly', () => {
  it('Should decrement value', () => {
    const actual = counterReducer(initialState, counterActions.decrement());
    expect(actual.value).toEqual(-1);
  });

  it('Should increment value', () => {
    const actual = counterReducer(initialState, counterActions.increment());
    expect(actual.value).toEqual(1);
  });
});
