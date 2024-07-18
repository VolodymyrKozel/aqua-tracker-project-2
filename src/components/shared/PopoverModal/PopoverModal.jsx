import { useEffect, useRef, useState } from 'react';
import { Popover } from 'react-tiny-popover';
import ModalWrapper from '../../shared/Modal/ModalWrapper';
import css from './PopoverModal.module.css';
import LogOutModal from '../../Modal/LogOutModal/LogOutModal';
import Icon from '../Icon/Icon';
import clsx from 'clsx';
import Button from '../Button/Button';
import { selectUser } from '../../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { IconChevronUp } from '../../UserBar/IconChevronUp';
import UserSettingsModal from '../../UserSettingsModal/UserSettingsModal';

const PopoverModal = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const [popoverWidth, setPopoverWidth] = useState('auto');

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  const user = useSelector(selectUser);

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
    setIsPopoverOpen(false);
  };

  const closeSettingsModal = () => setIsSettingsModalOpen(false);

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
    setIsPopoverOpen(false);
  };

  const closeLogOutModal = () => setIsLogOutModalOpen(false);

  const defaultAvatarURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TpgxWOkIYqLt3oEVJxj-USRyho-iADVb5w&s';

  // set width of popover content based on width of button bar
  useEffect(() => {
    if (buttonRef.current) {
      setPopoverWidth(`${buttonRef.current.offsetWidth}px`);
    }
  }, [isPopoverOpen]);

  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        positions={'bottom'}
        content={
          <div
            className={css.userBarPopoverContainer}
            style={{ width: popoverWidth }}
          >
            <button
              onClick={openSettingsModal}
              className={css.popoverBtn}
              title={'settings'}
              aria-label="settings"
            >
              <Icon
                className={css.popoverIcon}
                title="settings"
                width="16"
                height="16"
                id={'icon-settings'}
              />
              <p className={css.popoverText}>Setting</p>
            </button>
            <button
              onClick={openLogOutModal}
              type="button"
              className={clsx(css.popoverBtn, css.popoverBtnGray)}
              title="log out"
              aria-label="log out"
            >
              <Icon
                className={css.popoverIcon}
                width="16"
                height="16"
                id={'icon-log-out'}
              />
              <p className={css.popoverText}>Log out</p>
            </button>
          </div>
        }
      >
        <div className={css.userBar}>
          <Button
            ref={buttonRef}
            onClick={togglePopover}
            variant="secondary"
            className={css.userBarButton}
          >
            <p className={css.userBarName} title={user.name}>
              {user.name}
            </p>
            <img
              className={css.userBarAvatar}
              src={user.avatarURL || defaultAvatarURL}
              alt="Photo"
            />
            <IconChevronUp
              className={clsx(
                css.iconChevronUp,
                isPopoverOpen && css.iconChevronUpActive
              )}
            />
          </Button>
        </div>
      </Popover>

      <ModalWrapper
        modalIsOpen={isSettingsModalOpen}
        closeModal={closeSettingsModal}
        className={css.modal}
      >
        <UserSettingsModal closeModal={closeSettingsModal} />
      </ModalWrapper>

      <ModalWrapper
        modalIsOpen={isLogOutModalOpen}
        closeModal={closeLogOutModal}
        className={css.modal}
      >
        <LogOutModal closeModal={closeLogOutModal} />
      </ModalWrapper>
    </>
  );
};

export default PopoverModal;
