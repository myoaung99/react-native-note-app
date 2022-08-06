import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote } from "../store/noteList-slice";
import { GlobalStyles } from "../constants/GlobalStyles";
import { storeNoteServer, updateNoteServer } from "../utils/http-request";

function NoteManageScreen({ navigation, route }) {
  const notes = useSelector((state) => state.notes.noteList);

  const editingNoteId = route.params?.noteId;
  const editingNote = notes.find((note) => note.id === editingNoteId);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (editingNoteId) {
      navigation.setOptions({
        title: "Edit Note",
      });
    } else {
      navigation.setOptions({
        title: "Create Note",
      });
    }
  }, []);

  const confirmHandler = async (noteData) => {
    if (editingNoteId) {
      // dispatch update function
      await updateNoteServer(editingNoteId, noteData);
      dispatch(updateNote({ id: editingNoteId, data: noteData }));
    } else {
      // dispatch add function
      const id = await storeNoteServer({ ...noteData });
      dispatch(addNote({ id, ...noteData }));
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <NoteForm
        editingNoteId={editingNoteId}
        onConfirm={confirmHandler}
        editingNote={editingNote}
      />
    </SafeAreaView>
  );
}

export default NoteManageScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerText: {
    color: GlobalStyles.colors.confirm500,
    padding: 10,
    margin: 5,
  },
});
