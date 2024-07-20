import css from './UserBar.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/selectors.js';
import PopoverModal from '../shared/PopoverModal/PopoverModal.jsx';

const UserBar = () => {
  const user = useSelector(selectUser);

  return <PopoverModal />;
};

export default UserBar;
