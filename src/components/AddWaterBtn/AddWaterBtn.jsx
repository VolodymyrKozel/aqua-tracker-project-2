import { useEffect, useRef, useState } from 'react';
import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import LogOutModal from '../Modal/LogOutModal/LogOutModal.jsx';
import WaterDetailedInfo from '../WaterDetailedInfo/WaterDetailedInfo.jsx';

const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const openModalRef = useRef(null);

  const handleOutsideClick = e => {
    if (openModalRef.current && !openModalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  const handleButtonModalClick = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
  return (
    <div>
      <Button
        onClick={handleButtonModalClick}
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
      {/* {openModal && < onClose={handleButtonModalClick} />} */}
    </div>
  );
};

export default AddWaterBtn;
