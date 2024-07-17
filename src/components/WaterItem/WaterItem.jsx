import css from './WaterItem.module.css';
import IconGlass from './IconGlass';
import IconEdit from './IconEdit.jsx';
import IconTrash from './IconTrash.jsx';
import { useEffect, useRef, useState } from 'react';
import Button from '../shared/Button/Button';
import DeleteWaterModal from '../Modal/DeleteWaterModal/DeleteWaterModal';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';

const WaterItem = ({ item }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const modalRef = useRef(null);

  const HandleButtonEditClick = () => {
    setToggleEdit(!toggleEdit);
  };

  const HandleButtonDeleteClick = () => {
    setToggleDelete(!toggleDelete);
  };

  const handleOutsideClick = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setToggleEdit(false);
      setToggleDelete(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleOutsideClick);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.addEventListener('keydown', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleFormSubmit = () => {
    // console.log('Updated item:', data);
    setToggleEdit(false);
  };

  const formatTime = time => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour, 10);
    const period = hourNum < 12 ? 'AM' : 'PM';
    const formattedHour = hourNum % 12 || 12;
    return `${formattedHour}:${minute} ${period}`;
  };

  return (
    <div className={css.waterItem} ref={modalRef}>
      <IconGlass className={css.waterIconGlass} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{item.volume} ml</p>
        <p className={css.waterItemData}>{formatTime(item.time)}</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <Button
          onClick={HandleButtonEditClick}
          type="button"
          className={css.waterItemBtn}
        >
          <IconEdit className={css.waterIconBtn} />
        </Button>
        <Button
          onClick={HandleButtonDeleteClick}
          type="button"
          className={css.waterItemBtn}
        >
          <IconTrash className={css.waterIconBtn} />
        </Button>
        {toggleEdit && (
          <WaterModal
            item={item}
            isOpen={toggleEdit}
            onClose={HandleButtonEditClick}
            onSubmit={handleFormSubmit}
            operationType="edit"
            defaultValues={{ time: item.time, amount: item.volume }}
          />
        )}
        {toggleDelete && (
          <DeleteWaterModal id={item._id} onClose={HandleButtonDeleteClick} />
        )}
      </div>
    </div>
  );
};

export default WaterItem;
