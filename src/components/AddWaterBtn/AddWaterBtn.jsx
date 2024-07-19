import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import { addWater } from '../../redux/water/operations.js';
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useOpenClose.js';
import { getDateWithTime } from '../../utils/dateFunctions.js';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { format } from 'date-fns';

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

  const onSubmit = data => {
    const { amount, time } = data;
    /* toLocaleString: Converts the date to a string using the local time zone and locale. */
    /* import { format } from 'date-fns';

const date = new Date();
const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate); // e.g., "2024-07-20 10:10:20"
 */
    const dateWithTime = format(getDateWithTime(time), 'yyyy-MM-dd HH:mm');
    console.log('Submitted data:', dateWithTime);
    dispatch(addWater({ date: dateWithTime, volume: amount.toString() }));
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
