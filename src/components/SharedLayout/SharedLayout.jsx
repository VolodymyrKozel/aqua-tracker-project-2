import { Suspense } from 'react';
import Loader from '../shared/Loader/Loader.jsx';
import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
