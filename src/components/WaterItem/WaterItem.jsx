import css from './WaterItem.module.css';
import IconGlass from './IconGlass';
import IconEdit from './IconEdit.jsx';
import IconTrash from './IconTrash.jsx';
import { useRef } from 'react';
import Button from '../shared/Button/Button';
import DeleteWaterModal from '../Modal/DeleteWaterModal/DeleteWaterModal';
import { useDispatch } from 'react-redux';
import { deleteWater, updateWater } from '../../redux/water/operations.js';
import useModal from '../../hooks/useOpenClose.js';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { formatTime } from '../../utils/dateFunctions.js';
import { format } from 'date-fns';

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

  const onSubmit = data => {
    console.log('update data', data);
    dispatch(
      updateWater({
        ...data,
        _id: item._id,
      })
    );
    closeEdit();
  };
  console.log('item', item);
  return (
    <div className={css.waterItem} ref={modalRef}>
      <IconGlass className={css.waterIconGlass} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{item.volume} ml</p>
        <p className={css.waterItemData}>
          {item.time && !item.date
            ? formatTime(item.time)
            : format(item.date, 'HH:mm')}
        </p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <Button onClick={openEdit} type="button" className={css.waterItemBtn}>
          <IconEdit className={css.waterIconBtn} />
        </Button>
        <Button onClick={openDelete} type="button" className={css.waterItemBtn}>
          <IconTrash className={css.waterIconBtn} />
        </Button>

        <WaterModal
          modalIsOpen={isOpenEdit}
          item={item}
          onSubmit={onSubmit}
          defaultValues={{ time: item.time, amount: item.volume }}
          operationType="edit"
          onClose={closeEdit}
        />
        {isOpenDelete && (
          <DeleteWaterModal handleDelete={handleDelete} onClose={closeDelete} />
        )}
      </div>
    </div>
  );
};

export default WaterItem;
