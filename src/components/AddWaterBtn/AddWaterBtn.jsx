import { useRef, useState } from 'react';
import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { addWater } from '../../redux/water/operations.js';
import { useDispatch } from 'react-redux';

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
  const [openWaterModal, setOpenWaterModal] = useState(false);
  const waterModalRef = useRef(null);
  const dispatch = useDispatch();
  /* 
  const handleOutsideClick = e => {
    if (waterModalRef.current && !waterModalRef.current.contains(e.target)) {
      setOpenWaterModal(false);
    }
  };

  const handleEscapePress = e => {
    if (e.key === 'Escape') {
      setOpenWaterModal(false);
    }
  }; */

  const handleButtonClick = () => {
    setOpenWaterModal(!openWaterModal);
  };

  const handleButtonClose = () => {
    setOpenWaterModal(false);
  };
  const onSubmit = data => {
    console.log('add data', data);
    const { amount } = data;
    dispatch(addWater({ volume: amount.toString() }));
    setOpenWaterModal(false);
  };

  /*   useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleEscapePress);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []); */

  return (
    <div>
      <Button
        onClick={handleButtonClick}
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
      {openWaterModal && (
        <div ref={waterModalRef}>
          <WaterModal
            isOpen={openWaterModal}
            onRequestClose={handleButtonClose}
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
