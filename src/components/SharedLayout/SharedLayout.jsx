import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader.jsx';
import css from './SharedLayout.module.css';

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className={css.container}>{children}</div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
      </Suspense>
    </>
  );
};
