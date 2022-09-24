import React from 'react';

import css from './Modal.module.css';
import { Button } from '..';

interface ModalProps {
  children: React.ReactNode,
  closeModal: () => void,
}

function Modal({ children, closeModal }: ModalProps){
  
  const handleKeyDown = (event: React.KeyboardEvent<Element>): void => {
    event.code === 'Escape' && closeModal();
  };

  const handleBackdropClick = (event: React.MouseEvent<Element>): void => {
    event.target === event.currentTarget && closeModal();
  }

  React.useEffect(() => {
    window.addEventListener('keydown', (event: KeyboardEvent) => handleKeyDown);
    return () => {
      window.removeEventListener('keydown', (event: KeyboardEvent) => handleKeyDown);
    };
  });
  return (
    <>
      <div onClick={handleBackdropClick} className={css.modalBackdrop}>
        <div className={css.modal}>
          <div className={css.button}>
            <Button onClick={closeModal}>Close</Button>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal;