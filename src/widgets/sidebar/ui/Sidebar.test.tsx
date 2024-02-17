import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';

import { Sidebar } from '.';

describe('Sidebar works correctly', () => {
  it('Can render sidebar', () => {
    renderWithTranslation(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('Can sidebar toggle', () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId('sidebar');
    fireEvent.click(toggleBtn);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('collapsed');
  });
});
