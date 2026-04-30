import { Button } from '@/shared/ui';

import { counterSelectors } from '../model';
import { useCounterActions } from '../model/slice';

export const Counter = () => {
  const counterValue = counterSelectors.useCounterValue();
  const { decrement, increment } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
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
