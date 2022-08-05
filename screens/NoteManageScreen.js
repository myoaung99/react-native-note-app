import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../store/noteList-slice";
import { GlobalStyles } from "../constants/GlobalStyles";

function NoteManageScreen({ navigation, route }) {
  const editingNoteId = route.params?.noteId;
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

  const confirmHandler = (noteData) => {
    // console.log("confirmHandler", noteData);
    if (editingNoteId) {
      // dispatch update function
      console.log("update note");
    } else {
      // dispatch add function
      dispatch(addNote({ noteData }));
    }
  };

  const notes = useSelector((state) => state.notes.noteList);
  console.log(notes);

  return (
    <SafeAreaView style={styles.screen}>
      <NoteForm editingNoteId={editingNoteId} onConfirm={confirmHandler} />
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
