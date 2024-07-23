import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import { addWater } from '../../redux/water/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../../hooks/useOpenClose.js';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { selectSelectedDate } from '../../redux/water/selectors.js';
import { isToday } from 'date-fns';
import { useTranslation } from 'react-i18next';

import ModalWrapper from '../shared/Modal/ModalWrapper.jsx';

const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
  operationType = 'add',
  defaultValues = { time: '07:00', amount: 250 },
}) => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  defaultValues.time = `${hours}:${minutes}`;
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal: onClose } = useModal();
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);

  const onSubmit = data => {
    const { amount, time } = data;
    dispatch(addWater({ time: time, volume: amount.toString() }));
    onClose();
  };
  return (
    <div>
      <Button
        onClick={openModal}
        variant=".outline"
        className={`${css.addWaterButton} ${buttonClassName}`}
        disabled={isToday(selectedDate) ? false : true}
      >
        <IconPlusWater
          className={`${css.iconPlusWater} ${iconClassName}`}
          iconId={iconId}
          width={iconWidth}
          height={iconHeight}
        />
        <span className={`${css.addWaterSpan} ${spanClassName}`}>
          {t('trackerPage.addWater')}
        </span>
      </Button>
      <ModalWrapper modalIsOpen={isOpen} closeModal={onClose}>
        <WaterModal
          modalIsOpen={isOpen}
          onClose={onClose}
          onSubmit={onSubmit}
          operationType={operationType}
          defaultValues={defaultValues}
        />
      </ModalWrapper>
    </div>
  );
};

export default AddWaterBtn;
