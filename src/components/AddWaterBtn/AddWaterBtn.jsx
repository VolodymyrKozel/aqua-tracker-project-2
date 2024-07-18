import { useRef } from 'react';
import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { addWater } from '../../redux/water/operations.js';
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useOpenClose.js';

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
  const waterModalRef = useRef(null);
  const dispatch = useDispatch();
  const onSubmit = data => {
    console.log('add data', data);
    const { amount } = data;
    dispatch(addWater({ volume: amount.toString() }));
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
      {isOpen && (
        <div ref={waterModalRef}>
          <WaterModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            operationType={operationType}
            defaultValues={defaultValues}
          />
        </div>
      )}
    </div>
  );
};

export default AddWaterBtn;
