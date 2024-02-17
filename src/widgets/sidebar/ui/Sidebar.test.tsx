import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib';

import { Sidebar } from '.';

describe('Sidebar works correctly', () => {
  it('Can render sidebar', () => {
    componentRender(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('Can sidebar toggle', () => {
    componentRender(<Sidebar />);

    const toggleBtn = screen.getByTestId('toggle-sidebar');
    fireEvent.click(toggleBtn);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('collapsed');
  });
});
