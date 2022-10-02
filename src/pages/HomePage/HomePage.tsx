import React from 'react';

import { Table, Modal, NoteForm } from '../../components';

function Home() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <div className='flex flex-col items-center px-0 py-8 gap-8'>
      <Table closeModal={toggleModal} />
      <Table  statTable/>
      {isOpenModal &&
        <Modal closeModal={toggleModal}>
          <NoteForm label='Input new note' closeModal={toggleModal} />
        </Modal>
      }
    </div>
  )
}

export default Home;