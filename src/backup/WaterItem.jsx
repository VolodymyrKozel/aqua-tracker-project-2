import css from './WaterItem.module.css';
import IconGlass from './IconGlass';
import IconEdit from './IconEdit.jsx';
import IconTrash from './IconTrash.jsx';
import { useRef } from 'react';
import Button from '../shared/Button/Button';
import DeleteWaterModal from '../Modal/DeleteWaterModal/DeleteWaterModal';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { useDispatch } from 'react-redux';
import { deleteWater, updateWater } from '../../redux/water/operations.js';
import useModal from '../../hooks/useOpenClose.js';

const WaterItem = ({ item }) => {
  const {
    isOpen: isOpenEdit,
    openModal: openEdit,
    closeModal: closeEdit,
  } = useModal();

  const {
    isOpen: isOpenDelete,
    openModal: openDelete,
    closeModal: closeDelete,
  } = useModal();
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleDelete = () => {
    dispatch(deleteWater(item._id));
    closeDelete();
  };

  const handleFormSubmit = data => {
    console.log('Updated item:', item);
    dispatch(updateWater({ ...data, _id: item._id }));
    closeEdit();
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
        <Button onClick={openEdit} type="button" className={css.waterItemBtn}>
          <IconEdit className={css.waterIconBtn} />
        </Button>
        <Button onClick={openDelete} type="button" className={css.waterItemBtn}>
          <IconTrash className={css.waterIconBtn} />
        </Button>
        {isOpenEdit && (
          <WaterModal
            item={item}
            isOpen={isOpenEdit}
            onClose={closeEdit}
            onSubmit={handleFormSubmit}
            operationType="edit"
            defaultValues={{ time: item.time, amount: item.volume }}
          />
        )}
        {isOpenDelete && (
          <DeleteWaterModal handleDelete={handleDelete} onClose={closeDelete} />
        )}
      </div>
    </div>
  );
};

export default WaterItem;
