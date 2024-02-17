import { render, screen } from '@testing-library/react';

import { Button, EButtonTheme } from '.';

describe('Button works correctly', () => {
  it('Can render button', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toBeInTheDocument();
  });

  it('Can render clear button', () => {
    render(<Button theme={EButtonTheme.CLEAR}>Test</Button>);
    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toHaveClass('clear');
  });
});
