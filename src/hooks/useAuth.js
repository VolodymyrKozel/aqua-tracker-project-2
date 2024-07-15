import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser, selectCurrentUser } from "../redux/users/selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const currentUser = useSelector(selectCurrentUser);
    return { isLoggedIn, user, currentUser };
}