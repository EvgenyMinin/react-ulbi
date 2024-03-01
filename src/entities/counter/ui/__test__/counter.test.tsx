import { screen } from '@testing-library/dom';
import { componentRender } from 'shared/lib';

import { Counter } from '..';

describe('Counter works correctly', () => {
  it('Can render counter', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    const title = screen.getByTestId('title-value');
    expect(title).toHaveTextContent('10');
  });
});
