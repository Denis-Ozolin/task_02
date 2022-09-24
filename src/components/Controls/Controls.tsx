import React from 'react';

import css from './Controls.module.css';
import { Button, Modal, NoteForm } from '..';
import { toggleArchivedNote, removeNote } from '../../redux/notes/notesSlice';
import { notesSelectors } from '../../redux/notes';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';

interface ControlsProps {
  id: number,
  isArchived: boolean,
}

function Controls({ id, isArchived }: ControlsProps) {
  const notes = useAppSelector(notesSelectors.getNotes);
  const [isEditing, setIsEditing] = React.useState(false);
  const dispatch = useAppDispatch();
  const archivedBtnName = !isArchived ? 'Archive' : 'Unarchive';
  const editingNote = notes.find(note => note.id === id);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  }

  const toggleArchiveHandler = () => {
    if (editingNote) {
      const index = notes.indexOf(editingNote);
      
      dispatch(toggleArchivedNote(index));
    }
  
  }

  return (
    <>
      <div className={css.controls}>
        <Button onClick={toggleEditing}>Edit</Button>
        <Button onClick={toggleArchiveHandler}>{archivedBtnName}</Button>
        <Button onClick={() => dispatch(removeNote(id))}>Delete</Button>
      </div>
      {isEditing &&
        <Modal closeModal={toggleEditing}>
          {editingNote && <NoteForm label='Change note' closeModal={toggleEditing} noteContent={editingNote.content} category={editingNote.category} id={id} edit={isEditing} />}
        </Modal>
      }
    </>
  )
}

export default Controls;