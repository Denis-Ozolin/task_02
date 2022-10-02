import React from 'react';

import { Button } from '..';
import { toggleShowArchived } from '../../redux/notes/notesSlice';
import { useAppDispatch } from '../../hooks/hook';
import { noteTitles, statisticTitles } from '../../options';

interface TableHeaderProps {
  statTable?: boolean,
  isArchived?: boolean,
}

function TableHeader({ statTable, isArchived }: TableHeaderProps) {
  const dispatch = useAppDispatch();
  const titles = statTable ? statisticTitles : noteTitles;
  const innerBtnText = !isArchived ? 'Open Archive' : 'Close Archive';

  return (
    <div className='flex items-baseline mb-2'>
      <ul className='flex leading-10 py-0 px-5 gap-8'>
        {titles.map(title =>
          <li key={title} className={`font-medium text-xl w-44 ${statTable? 'first:w-80': ''}`}>
            {title}
          </li>)}
      </ul>
      {!statTable && <nav className='ml-auto'>
        <Button onClick={() => dispatch(toggleShowArchived())}>{innerBtnText}</Button>
      </nav>}
    </div>
  )
}

export default TableHeader;