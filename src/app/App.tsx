import { Suspense, useEffect } from 'react';

import cn from 'classnames';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { userSelectors, userSlice } from 'entities/user';

import { useAppDispatch, useAppSelector } from './providers';
import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(userSelectors.isInitializedSelector);

  useEffect(() => {
    dispatch(userSlice.actions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app', { hovered: true, selected: false })}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content-page'>
          <Sidebar />
          {isInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
