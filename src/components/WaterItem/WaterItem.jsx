import css from './WaterItem.module.css';
import IconGlass from './IconGlass';
import IconEdit from './IconEdit.jsx';
import IconTrash from './IconTrash.jsx';
import { useRef } from 'react';
import Button from '../shared/Button/Button';
import DeleteWaterModal from '../Modal/DeleteWaterModal/DeleteWaterModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWater, updateWater } from '../../redux/water/operations.js';
import useModal from '../../hooks/useOpenClose.js';
import WaterModal from '../Modal/WaterModal/WaterModal.jsx';
import { formatTime } from '../../utils/dateFunctions.js';
import { format } from 'date-fns';
import { selectSelectedDate } from '../../redux/water/selectors.js';
import ModalWrapper from '../shared/Modal/ModalWrapper.jsx';
import { useTranslation } from 'react-i18next';

const WaterItem = ({ item }) => {
  const { t } = useTranslation();

  const selectedDate = useSelector(selectSelectedDate);
  item.date == format(selectedDate, 'd');
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
    dispatch(deleteWater(item));

    closeDelete();
  };

  const onSubmit = data => {
    dispatch(
      updateWater({
        ...data,
        _id: item._id,
      })
    );
    closeEdit();
  };
  return (
    <div className={css.waterItem} ref={modalRef}>
      <IconGlass className={css.waterIconGlass} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>
          {item.volume}
          {t('trackerPage.ml')}
        </p>
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
        <ModalWrapper modalIsOpen={isOpenEdit} closeModal={closeEdit}>
          <WaterModal
            className={css.waterModal}
            item={item}
            onSubmit={onSubmit}
            defaultValues={{ time: item.time, amount: item.volume }}
            operationType="edit"
            onClose={closeEdit}
          />
        </ModalWrapper>
        <ModalWrapper modalIsOpen={isOpenDelete} closeModal={closeDelete}>
          <DeleteWaterModal handleDelete={handleDelete} onClose={closeDelete} />
        </ModalWrapper>
      </div>
    </div>
  );
};

export default WaterItem;
