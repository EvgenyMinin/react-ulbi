import { useAppDispatch, useAppSelector } from 'app/providers';

import { Button } from 'shared/ui';

import { counterSelectors, counterSlice } from '../model';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(counterSelectors.getCounterValue);

  const handleIncrement = () => {
    dispatch(counterSlice.counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterSlice.counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid='increment-button'>
        +
      </Button>
      <Button onClick={handleDecrement} data-testid='decrement-button'>
        -
      </Button>
    </div>
  );
};
