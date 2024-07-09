import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <SharedLayout>
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    </SharedLayout>
  );
};
