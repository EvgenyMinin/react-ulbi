import { Suspense, useEffect } from 'react';

import cn from 'classnames';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { userSlice } from 'entities/user';

import { useAppDispatch } from './providers';
import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userSlice.actions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app', { hovered: true, selected: false })}>
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
