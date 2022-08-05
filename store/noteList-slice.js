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
      const id = new Date() + Math.random();
      const date = new Date().getTime();
      state.noteList.unshift({ id, date, ...action.payload.noteData });
    },
    removeNote: (state, action) => {
      // => noteId
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
    },
  },
});

export const { addNote, removeNote, setNotes, updateNote } =
  noteListSlice.actions;

export default noteListSlice.reducer;
