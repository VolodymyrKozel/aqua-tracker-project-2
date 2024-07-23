import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import { addWater } from '../../redux/water/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../../hooks/useOpenClose.js';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { selectSelectedDate } from '../../redux/water/selectors.js';
import { isToday } from 'date-fns';

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
  const { isOpen, openModal, closeModal: onClose } = useModal();
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);

  const onSubmit = data => {
    const { amount, time } = data;
    console.log(time);
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
          Add water
        </span>
      </Button>
      <WaterModal
        modalIsOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        operationType={operationType}
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default AddWaterBtn;
