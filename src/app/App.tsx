import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar } from 'widgets/navbar';

import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, selected: false }, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};
