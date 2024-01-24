import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, selected: false }, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О Сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
