import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noteList: [],
};

export const noteListSlice = createSlice({
  name: "note-slice",
  initialState,
  reducers: {
    addNote: () => {},
    removeNote: () => {},
    updateNote: () => {},
    setNotes: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {} = noteListSlice.actions;

export default noteListSlice.reducer;
