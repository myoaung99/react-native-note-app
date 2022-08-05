import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noteList: [],
};

export const noteListSlice = createSlice({
  name: "note-slice",
  initialState,
  reducers: {
    addNote: (state, action) => {
      // => noteData
      const date = new Date().toISOString();
      state.noteList.unshift({ date, ...action.payload });
    },
    removeNote: (state, action) => {
      // => noteId
      state.noteList = state.noteList.filter(
        (note) => note.id !== action.payload.noteId
      );
    },
    updateNote: (state, action) => {
      // => noteId, noteData
      const { id: noteId, data: noteData } = action.payload;
      const updatingItemIndex = state.noteList.findIndex(
        (note) => note.id === noteId
      );
      state.noteList[updatingItemIndex] = { id: noteId, ...noteData };
    },
    setNotes: (state, action) => {
      //=> noteList
      state.noteList = action.payload;
    },
  },
});

export const { addNote, removeNote, setNotes, updateNote } =
  noteListSlice.actions;

export default noteListSlice.reducer;
