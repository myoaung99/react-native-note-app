import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noteList: [],
};

export const noteListSlice = createSlice({
  name: "note-slice",
  initialState,
  reducers: {
    addNote: (state, actions) => {
      // => noteData
      const id = new Date() + Math.random().toString;
      const date = new Date().getTime();
      state.noteList.push({ id, date, ...actions.payload.noteData });
    },
    removeNote: (state, actions) => {
      // => noteId
    },
    updateNote: (state, actions) => {
      // => noteId, noteData
    },
    setNotes: (state, actions) => {
      //=> noteList
    },
  },
});

export const { addNote, removeNote, setNotes, updateNote } =
  noteListSlice.actions;

export default noteListSlice.reducer;
