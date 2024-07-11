import { useState } from 'react';
import ModalReusable from '../Modal/ModalReusable';
import { CopyBlock, nord } from 'react-code-blocks';
import Input from '../shared/Input/Input';

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
        <Input className="input" type="text" placeholder="Enter your name" />
      </div>
    </>
  );
};

export default ModalExample;
