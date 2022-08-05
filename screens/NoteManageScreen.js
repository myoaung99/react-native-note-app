import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";

import { GlobalStyles } from "../constants/GlobalStyles";

function NoteManageScreen({ navigation, route }) {
  const editingNoteId = route.params?.noteId;

  return (
    <SafeAreaView style={styles.screen}>
      <NoteForm editingNoteId={editingNoteId} />
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
