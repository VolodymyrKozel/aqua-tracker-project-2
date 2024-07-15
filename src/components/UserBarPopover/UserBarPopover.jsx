import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

/* import { hidePopover } from '../../redux/popover/slice';
import { openModal } from '../../redux/modal/slice'; */

import Icon from '../shared/Icon/Icon';

import css from './UserBarPopover.module.css';

export default function UserBarPopover() {
  /*   const { isVisible } = useSelector(state => state.popover); */
  const dispatch = useDispatch();
  const popoverRef = useRef();
  const { t } = useTranslation();

  const handleClickOutside = useCallback(
    event => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !event.target.closest('button')
      ) {
        /*  dispatch(hidePopover()); */
      }
    },
    [dispatch]
  );

  /*   useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, handleClickOutside]);

  if (!isVisible) {
    return null;
  } */

  const showModal = modalType => {
    dispatch(openModal({ modalType }));
    dispatch(hidePopover());
  };

  return (
    <div className={css.container} ref={popoverRef}>
      <button
        type="button"
        className={css.popoverBtn}
        onClick={() => showModal('UserSettingsModal')}
      >
        <Icon
          className={css.popoverIcon}
          title="settings"
          width="16"
          height="16"
          id={'icon-settings'}
        />
        {/*         <svg className={css.popoverIcon} width="16" height="16">
          <use href={`${icons}#icon-settings`}></use>
        </svg> */}

        <p className={css.popoverText}>{t('trackerPage.settings')}</p>
      </button>

      <button
        type="button"
        className={clsx(css.popoverBtn, css.popoverBtnGray)}
        onClick={() => showModal('LogOutModal')}
      >
        <Icon
          className={css.popoverIcon}
          width="16"
          height="16"
          id={'icon-log-out'}
        />
        {/*         <svg className={css.popoverIcon} width="16" height="16">
          <use href={`${icons}#icon-log-out`}></use>
        </svg> */}

        <p className={css.popoverText}>{t('trackerPage.logout')}</p>
      </button>
    </div>
  );
}
