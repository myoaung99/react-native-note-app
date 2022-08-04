import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteList from "../components/Note/NoteList";
import CornarButton from "../components/UI/CornarButton";
import { DUMMY_NOTES } from "./../data/DummyNotes";

function NoteScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <NoteList noteList={DUMMY_NOTES} />
      <CornarButton />
    </SafeAreaView>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
