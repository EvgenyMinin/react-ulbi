import { Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, selected: false }, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
