import { fireEvent, screen } from '@testing-library/dom';

import { componentRender } from 'shared/lib';

import { Counter } from '..';

describe('Counter works correctly', () => {
  const render = () => componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
  it('Can render counter', () => {
    render();

    const title = screen.getByTestId('value-title');
    expect(title).toHaveTextContent('10');
  });

  it('increment', () => {
    render();

    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    const title = screen.getByTestId('value-title');
    expect(title).toHaveTextContent('11');
  });

  it('decrement', () => {
    render();

    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    const title = screen.getByTestId('value-title');
    expect(title).toHaveTextContent('9');
  });
});
