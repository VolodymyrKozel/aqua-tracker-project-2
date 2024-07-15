// import Button from '../shared/Button/Button';
// import css from './WelcomeSection.module.css';
// import { useNavigate } from 'react-router';
import { useState } from 'react';

import WaterFormModal from '../../components/WaterFormModal/WaterFormModal.jsx';
// function WelcomeSection() {
//   const navigate = useNavigate();
//   return (
//     <section className={css.container}>
//       <p className={css.text}>Record daily water intake and track</p>
//       <h1 className={css.title}>Water consumption tracker</h1>
//       <Button variant="primary" onClick={() => navigate('/signup')}>
//         Try tracker
//       </Button>
//       <Button variant="outline" onClick={() => navigate('/signin')}>
//         Sign in
//       </Button>
//       <Button variant="secondary" onClick={() => navigate('/tracker')}>
//         Tracker
//       </Button>
//       <WaterFormModal />
//     </section>
//   );
// }

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleFormSubmit = data => {
    console.log('Form data:', data);
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <WaterFormModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        defaultValues={{ time: '07:00', amount: 250 }}
      />
    </div>
  );
};

export default App;

// export default WelcomeSection;
