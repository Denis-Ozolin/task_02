import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import defaultNotes from '../../db/notes';
import INote from '../../interfaces/Note.interfaces';

type NotesState = {
  noteList: INote[];
  showArchived: boolean;
}

const initialState: NotesState = {
  noteList: [...defaultNotes],
  showArchived: false,
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleShowArchived(state) {
      state.showArchived = !state.showArchived;
    },
    addNote(state, action: PayloadAction<INote>) {
      state.noteList = [...state.noteList, action.payload];
    },
    editNote(state, action: PayloadAction<{id: number, content: string, category: string}>) {
      state.noteList.map((note) => {
        if (note.id === action.payload.id) {
          note.content = action.payload.content;
          note.category = action.payload.category;
        }
        return state.noteList;
      })
    },
    removeNote(state, action: PayloadAction<number>) {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload);
    },
    toggleArchivedNote(state, action: PayloadAction<number>) {
      
      state.noteList[action.payload].active = !state.noteList[action.payload].active;
    },
  },
});

export default notesSlice.reducer;

export const { addNote, editNote, removeNote, toggleShowArchived, toggleArchivedNote } =
  notesSlice.actions;
