import React from 'react';

import css from './HomePage.module.css';
import { Table, Modal, NoteForm } from '../../components';

function Home() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <div className={css.container}>
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