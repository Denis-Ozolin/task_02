import React from 'react';

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
      <div className='border-black rounded-sm border-solid border p-8 bg-bgc-hex w-table-w'>
        <TableHeader statTable={statTable} isArchived={isArchived} />
        <TableBody statTable={statTable} isArchived={isArchived} />
        {!statTable && <div className='flex justify-end'>
          {!isArchived && <Button onClick={closeModal} accent>Create</Button>}
        </div>}
      </div>
  )
}

export default Table;