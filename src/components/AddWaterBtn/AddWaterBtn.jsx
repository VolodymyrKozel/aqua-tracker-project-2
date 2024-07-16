import { useEffect, useRef, useState } from 'react';
import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
// import WaterModal from '../Modal/WaterModal/WaterModal.jsx';

const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
  // operationType = 'add',
  // defaultValues = {},
  // onSubmit,
}) => {
  const [openWaterModal, setOpenWaterModal] = useState(false);
  const waterModalRef = useRef(null);

  const handleOutsideClick = e => {
    if (waterModalRef.current && !waterModalRef.current.contains(e.target)) {
      setOpenWaterModal(false);
    }
  };

  const handleButtonClick = () => {
    setOpenWaterModal(!openWaterModal);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleOutsideClick);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.addEventListener('keydown', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

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
      {/* <WaterModal
        isOpen={openWaterModal}
        onRequestClose={handleButtonClick}
        onSubmit={onSubmit}
        operationType={operationType}
        defaultValues={defaultValues}
      /> */}
    </div>
  );
};

export default AddWaterBtn;
