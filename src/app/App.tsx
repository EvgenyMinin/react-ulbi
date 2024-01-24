import { Link } from 'react-router-dom';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, selected: false }, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О Сайте</Link>
      <AppRouter />
    </div>
  );
};
