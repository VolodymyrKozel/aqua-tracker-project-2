import { useEffect, useRef, useState } from 'react';
import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import WaterModal from './WaterModal.jsx';

const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
}) => {
  const [openWaterModal, setOpenWaterModal] = useState(false);
  const waterModalRef = useRef(null);

  const handleOutsideClick = e => {
    if (waterModalRef.current && !waterModalRef.current.contain(e.target)) {
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
  });
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
      {openWaterModal && <WaterModal onClose={handleButtonClick} />}
    </div>
  );
};

export default AddWaterBtn;
