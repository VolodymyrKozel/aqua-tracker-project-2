import { lazy, Suspense, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/users/operations';
import { selectIsRefreshing } from '../redux/users/selectors';
import Loader from './shared/Loader/Loader';
import LogOutModal from './Modal/LogOutModal/LogOutModal';
import ModalExample from './ModalExample/ModalExample';
import Presentation from '../pages/Presentation/Presentation';
/*import { ModalExample } from './ModalExample/ModalExample';  */

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TrackerPage = lazy(() => import('../pages/TrackerPage/TrackerPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader variant="fullScreen" />
  ) : (
    <>
      <Suspense fallback={<Loader variant="fullScreen" />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            {/*  <RestrictedRoute
                  redirectTo="/tracker"
                  component={<HomePage />}
                /> */}
            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/tracker"
                  component={<SignUpPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/tracker"
                  component={<SignInPage />}
                />
              }
            />
            <Route
              path="/tracker"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<TrackerPage />}
                />
              }
            />

            <Route path="/logout" element={<LogOutModal />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/example" element={<ModalExample />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
};
