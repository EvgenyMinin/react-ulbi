import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers';

import i18nForTest from 'shared/config/i18n/i18nForTests';

import { INITIAL_ROUTE } from './consts';

export interface IComponentRenderOptions {
  route?: string;
}

export const componentRender = (component: ReactNode, options?: IComponentRenderOptions) =>
  render(
    <StoreProvider>
      <MemoryRouter initialEntries={[options?.route ?? INITIAL_ROUTE]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
