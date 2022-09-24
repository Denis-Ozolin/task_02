import React from 'react';

import css from './NoteForm.module.css';
import { Button } from '..';
import { noteCategories } from '../../options';
import { addNote, editNote } from '../../redux/notes/notesSlice';
import { createNoteObj, createChangeObj } from '../../helpers';
import { useAppDispatch } from '../../hooks/hook';

interface NoteFormProps {
  label: string,
  closeModal: () => void, 
  noteContent?: string,
  category?: string,
  id?: number,
  edit?: boolean,
}

function NoteForm({ label, closeModal, noteContent = '', category = '', id, edit}: NoteFormProps) {
  const [currentContent, setCurrentContent] = React.useState(noteContent);
  const [selected, setSelected] = React.useState(category);
  const dispatch = useAppDispatch();

  const addNoteHandler = () => {
    dispatch(addNote(createNoteObj(currentContent, selected)));
    closeModal();
  }

  const changeNoteHandler = () => {
    if (id || id === 0) {
      dispatch(editNote(createChangeObj(id, currentContent, selected)));
      closeModal();
    }  
  }

  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(event.target.value);
  }

  const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value)
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    edit ? changeNoteHandler() : addNoteHandler();
  }

  return (
    <form onSubmit={submitHandler} className={css.form}>     
      <label htmlFor="note" className={css.formLabel}>{label}</label>
      <textarea onChange={changeTextareaHandler} value={currentContent} id="note" className={css.formTextarea} required></textarea>
      <select onChange={changeSelectHandler} value={selected} className={css.formSelect} required>
        <option value='' hidden>Choose Category</option>
        {noteCategories.map(category => 
          <option key={category} value={category}>{category}</option>)}
      </select>
      <div className={css.button}>
        {!edit
          ?<Button type='submit' accent>Add</Button>
          :<Button type='submit' accent>Save Change</Button> }
      </div>
    </form>
  )
}

export default NoteForm;