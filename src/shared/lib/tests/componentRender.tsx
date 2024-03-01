import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTests';

export interface IComponentRenderOptions {
  route?: string;
  initialState?: IStateSchema;
}

export const componentRender = (
  component: ReactNode,
  options: IComponentRenderOptions = { route: '/' }
) => {
  const { route, initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
