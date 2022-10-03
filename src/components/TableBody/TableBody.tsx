import React from 'react';

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

  return (
    <ul className='flex flex-col'>
      {!statTable ? filteredNotes.map(note =>
        <li key={note.id} className='bg-white border-black rounded-sm border-solid border flex items-center mb-2 py-2 px-5 gap-8 h-12'>
          <div className='overflow-hidden text-lg w-44 max-h-full'>{note.create}</div>
          <div className='overflow-hidden text-lg w-44 max-h-full'>{note.category}</div>
          <div className='overflow-hidden text-lg w-44 max-h-full'>{note.content}</div>
          <div className='overflow-hidden text-lg w-44 max-h-full'>{getDates(note.content)}</div>
          <Controls id={note.id} isArchived={isArchived} />
        </li>) :
        noteCategories.map(category => 
        <li key={category} className='bg-white border-black rounded-sm border-solid border flex items-center mb-2 py-2 px-5 gap-8'>        
          <div className='overflow-hidden text-lg w-44 max-h-full first:w-80'>{category}</div>
          <div className='overflow-hidden text-lg w-44 max-h-full first:w-80'>{getActiveAmount(category, notes)}</div>
          <div className='overflow-hidden text-lg w-44 max-h-full first:w-80'>{getArchivedAmount(category, notes)}</div>
        </li>
      )}     
    </ul>
  )
}

export default TableBody;