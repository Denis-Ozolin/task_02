import INote from "../../interfaces/Note.interfaces";

const getNotes = (state: { notes: { noteList: INote[]; }; }) => state.notes.noteList;
const getShowArchived = (state: { notes: { showArchived: boolean; }; }) => state.notes.showArchived;

const notesSelectors = {
  getNotes,
  getShowArchived,
};

export default notesSelectors;
