import { lazy, Suspense, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/users/operations';
import { selectIsRefreshing, selectIsLoading } from '../redux/users/selectors';
import Loader from './shared/Loader/Loader';
import LogOutModal from './Modal/LogOutModal/LogOutModal';
import ModalExample from './ModalExample/ModalExample';
import Presentation from '../pages/Presentation/Presentation';
import { Header } from './Header/Header';

import PresentationPage from '../Presentation/PresentationPage/PresentationPage.jsx';
/*import { ModalExample } from './ModalExample/ModalExample';  */

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TrackerPage = lazy(() => import('../pages/TrackerPage/TrackerPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  return isRefreshing || isLoading ? (
    <Loader variant="fullScreen" />
  ) : (
    <>
      <Header />
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
                  component={
                    <Suspense fallback={<Loader variant="fullScreen" />}>
                    <SignUpPage />
                  </Suspense>
                  }
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/tracker"
                  component={
                    <Suspense fallback={<Loader variant="fullScreen" />}>
                      <SignInPage />
                    </Suspense>
                  }
                />
              }
            />
            <Route
              path="/tracker"
              element={
                <PrivateRoute redirectTo="/" component={<TrackerPage />} />
              }
            />

            <Route path="/logout" element={<LogOutModal />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/example" element={<ModalExample />} />
            <Route path="/present/*" element={<PresentationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
};
