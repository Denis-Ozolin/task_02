import React from 'react';

import css from './TableHeader.module.css';
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
  const stylesTitle = !statTable ? css.title : css.statTitle;

  return (
    <div className={css.header}>
      <ul className={css.titleList}>
        {titles.map(title =>
          <li key={title} className={stylesTitle}>
            {title}
          </li>)}
      </ul>
      {!statTable && <nav className={css.headerNav}>
        <Button onClick={() => dispatch(toggleShowArchived())}>{innerBtnText}</Button>
      </nav>}
    </div>
  )
}

export default TableHeader;