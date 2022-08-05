import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";

function NoteManageScreen({ navigation, route }) {
  const editingNoteId = route.params?.noteId;
  useLayoutEffect(() => {
    if (editingNoteId) {
      navigation.setOptions({
        title: "Edit Note",
      });
    } else {
      navigation.setOptions({
        title: "Create New Note",
      });
    }
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <NoteForm />
    </SafeAreaView>
  );
}

export default NoteManageScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
