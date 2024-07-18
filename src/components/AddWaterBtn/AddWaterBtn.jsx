import { useRef, useState } from 'react';
import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';

const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
  operationType = 'add',
  defaultValues = { time: '07:00', amount: 250 },
  onSubmit,
}) => {
  const [openWaterModal, setOpenWaterModal] = useState(false);
  const waterModalRef = useRef(null);

  const handleButtonClick = () => {
    setOpenWaterModal(!openWaterModal);
  };

  const handleButtonClose = () => {
    setOpenWaterModal(false);
  };

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
