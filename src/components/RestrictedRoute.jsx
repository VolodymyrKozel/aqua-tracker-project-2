import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in,
 *  render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  /*  const isLoggedIn = useSelector(selectIsLoggedIn); */

  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
