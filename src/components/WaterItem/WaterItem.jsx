import css from './WaterItem.module.css';
import IconGlass from './IconGlass';
import IconEdit from './IconEdit.jsx';
import IconTrash from './IconTrash.jsx';
import Button from '../shared/Button/Button';
import DeleteWaterModal from '../Modal/DeleteWaterModal/DeleteWaterModal';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { useDispatch } from 'react-redux';
import { deleteWater, updateWater } from '../../redux/water/operations.js';
import { useState, useCallback } from 'react';

const WaterItem = ({ item }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const dispatch = useDispatch();

  const handleButtonEditClick = useCallback(() => {
    setToggleEdit(true);
  }, []);

  const handleButtonDeleteClick = useCallback(() => {
    setToggleDelete(true);
  }, []);

  const handleDelete = useCallback(async () => {
    await dispatch(deleteWater(item._id)).unwrap();
    setToggleDelete(false);
  }, [dispatch, item._id]);

  const handleFormSubmit = useCallback(
    async data => {
      await dispatch(updateWater({ ...data, _id: item._id })).unwrap();
      setToggleEdit(false);
    },
    [dispatch, item._id]
  );

  const formatTime = time => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour, 10);
    const period = hourNum < 12 ? 'AM' : 'PM';
    const formattedHour = hourNum % 12 || 12;
    return `${formattedHour}:${minute} ${period}`;
  };

  return (
    <div className={css.waterItem}>
      <IconGlass className={css.waterIconGlass} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{item.volume} ml</p>
        <p className={css.waterItemData}>{formatTime(item.time)}</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <Button
          onClick={handleButtonEditClick}
          type="button"
          className={css.waterItemBtn}
        >
          <IconEdit className={css.waterIconBtn} />
        </Button>
        <Button
          onClick={handleButtonDeleteClick}
          type="button"
          className={css.waterItemBtn}
        >
          <IconTrash className={css.waterIconBtn} />
        </Button>
        {toggleEdit && (
          <WaterModal
            item={item}
            isOpen={toggleEdit}
            onClose={() => setToggleEdit(false)}
            onSubmit={handleFormSubmit}
            operationType="edit"
            defaultValues={{ time: item.time, amount: item.volume }}
          />
        )}
        {toggleDelete && (
          <DeleteWaterModal
            handleDelete={handleDelete}
            onClose={() => setToggleDelete(false)}
          />
        )}
      </div>
    </div>
  );
};

export default WaterItem;
