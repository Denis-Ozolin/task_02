import React from 'react';

import css from './TableBody.module.css';
import { Controls } from '..';
import { notesSelectors } from '../../redux/notes';
import { getDates, getActiveAmount, getArchivedAmount } from '../../helpers';
import { useAppSelector } from '../../hooks/hook';
import { noteCategories } from '../../options';

interface TableBodyProps {
  statTable?: boolean,
  isArchived: boolean,
}

function TableBody({ statTable, isArchived }: TableBodyProps) {
  const notes = useAppSelector(notesSelectors.getNotes);

  const filteredNotes = !isArchived
    ? notes.filter(note => note.active)
    : notes.filter(note => !note.active);
  const stylesField = !statTable ? css.field : css.statField;

  return (
    <ul className={css.itemList}>
      {!statTable ? filteredNotes.map(note =>
        <li key={note.id} className={css.item}>
          <div className={stylesField}>{note.create}</div>
          <div className={stylesField}>{note.category}</div>
          <div className={stylesField}>{note.content}</div>
          <div className={stylesField}>{getDates(note.content)}</div>
          <Controls id={note.id} isArchived={isArchived} />
        </li>) :
        noteCategories.map(category => 
        <li key={category} className={css.item}>        
          <div className={stylesField}>{category}</div>
            <div className={stylesField}>{getActiveAmount(category, notes)}</div>
            <div className={stylesField}>{getArchivedAmount(category, notes)}</div>
        </li>
      )}     
    </ul>
  )
}

export default TableBody;