import React from 'react';

import css from './Table.module.css';
import { TableHeader, TableBody, Button } from '..';
import { notesSelectors } from '../../redux/notes';
import { useAppSelector } from '../../hooks/hook';

interface TableProps {
  closeModal?: () => void,
  statTable?: boolean,
}

function Table ({ closeModal, statTable }: TableProps) {
  const isArchived = useAppSelector(notesSelectors.getShowArchived);
  
  return (
      <div className={css.table}>
        <TableHeader statTable={statTable} isArchived={isArchived} />
        <TableBody statTable={statTable} isArchived={isArchived} />
        {!statTable && <div className={css.button}>
          {!isArchived && <Button onClick={closeModal} accent>Create</Button>}
        </div>}
      </div>
  )
}

export default Table;