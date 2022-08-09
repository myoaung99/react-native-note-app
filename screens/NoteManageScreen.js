import React, { useLayoutEffect, useState } from "react";
import { View, Keyboard, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote } from "../store/noteList-slice";
import { GlobalStyles } from "../constants/GlobalStyles";
import { storeNoteServer, updateNoteServer } from "../utils/http-request";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function NoteManageScreen({ navigation, route }) {
  const notes = useSelector((state) => state.notes.noteList);

  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState(false);

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
    setIsFetching(true);
    try {
      if (editingNoteId) {
        // dispatch update function
        await updateNoteServer(editingNoteId, noteData);
        dispatch(updateNote({ id: editingNoteId, data: noteData }));
      } else {
        // dispatch add function
        const id = await storeNoteServer({ ...noteData });
        dispatch(addNote({ id, ...noteData }));
      }

      Keyboard.dismiss();
      navigation.goBack();
    } catch (error) {
      setHasError(true);
    }

    setIsFetching(false);
  };

  if (hasError && !isFetching) {
    return <ErrorOverlay />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
