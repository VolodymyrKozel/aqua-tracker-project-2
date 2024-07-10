import { useState } from 'react';
import ModalReusable from '../Modal/ModalReusable';
import { CopyBlock, nord } from 'react-code-blocks';

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      {/* кнопка для відкриття модалки */}
      <button onClick={openModal}>open modal</button>
      <ModalReusable modalIsOpen={modalIsOpen} openModal={openModal}>
        <h1>Title</h1>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter your name" />
        {/* Тут має бути ваш компонент */}
        <p>some content</p>
        {/* Кнопка для закриття модалки */}
        <button onClick={closeModal}>close</button>
      </ModalReusable>
      <div>
        <h2> Компонент ModalReusable</h2>
        <p>
          ModalReusable - це компонент модального вікна, створений за допомогою
          бібліотеки react-modal з можливістю застосування власних стилів через
          CSS модулі.
        </p>
        <h2> Використання</h2>
        <CopyBlock
          text={`import React, { useState } from 'react';
import ModalReusable from './ModalReusable';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Відкрити Модальне Вікно</button>
      <ModalReusable modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <h2>Це модальне вікно</h2>
        <button onClick={closeModal}>Закрити</button>
      </ModalReusable>
    </div>
  );
}

export default App;`}
          language="jsx"
          showLineNumbers={true}
          wrapLines={true}
          theme={nord}
        />
      </div>
    </>
  );
};

export default ModalExample;
