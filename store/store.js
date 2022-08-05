import { configureStore } from "@reduxjs/toolkit";
import noteListSlice from "./noteList-slice";

export const store = configureStore({
  reducer: {
    notes: noteListSlice,
  },
});
