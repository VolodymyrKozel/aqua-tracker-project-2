// // import React, { useEffect } from 'react';
// import Modal from 'react-modal';
// import WaterForm from '../WaterForm/WaterForm.jsx';
// import css from './WaterModal.module.css';
// const WaterModal = ({
//   isOpen,
//   onRequestClose,
//   onSubmit,
//   operationType,
//   defaultValues,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel={operationType === 'add' ? 'Add Water' : 'Edit Water'}
//       className={css.modal}
//       overlayClassName={css.overlay}
//     >
//       <h2>
//         {operationType === 'add' ? 'Add Water Intake' : 'Edit Water Intake'}
//       </h2>
//       <WaterForm
//         onSubmit={onSubmit}
//         onRequestClose={onRequestClose}
//         defaultValues={defaultValues}
//       />
//     </Modal>
//   );
// };
// export default WaterModal;
import PropTypes from 'prop-types';
// import WaterForm from '../ModalWaterForm/ModalWaterForm';
import WaterForm from '../WaterForm/WaterForm.jsx';


const WaterModal = ({ operationType }) => {
  const header =
    operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
  const subheader =
    operationType === 'add' ? 'Choose a value:' : 'Correct entered data:';

  return (
    <div className="modal">
      <div className="modal-content">
        <WaterForm
          operationType={operationType}
          header={header}
          subheader={subheader}
        />
      </div>
    </div>
  );
};

WaterModal.propTypes = {
  operationType: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default WaterModal;
