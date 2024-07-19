import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import { addWater } from '../../redux/water/operations.js';
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useOpenClose.js';
import { getDateWithTime } from '../../utils/dateFunctions.js';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { addHours, addMinutes, format } from 'date-fns';

const AddWaterBtn = ({
  selectedDate,
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
