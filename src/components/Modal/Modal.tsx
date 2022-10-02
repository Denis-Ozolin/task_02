import React from 'react';

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
      <div onClick={handleBackdropClick} className='bg-backdrop-rgba flex items-center justify-center h-screen fixed top-0 left-0 w-screen z-100'>
        <div className='bg-bgc-hex border-black rounded-sm border-solid border flex justify-center relative w-modal-w h-modal-h'>
          <div className='absolute z-110 top-5 right-5'>
            <Button onClick={closeModal}>Close</Button>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal;