import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import NoteList from "../components/Note/NoteList";
import CornarButton from "../components/UI/CornarButton";
import { DUMMY_NOTES } from "./../data/DummyNotes";
import { useSelector } from "react-redux";

function NoteScreen({ navigation }) {
  const noteList = useSelector((state) => state.notes.noteList);
  const btnPressHandler = () => {
    navigation.navigate("ManageNote");
  };
  return (
    <SafeAreaView style={styles.screen}>
      <NoteList noteList={noteList} />
      <CornarButton onPress={btnPressHandler} />
    </SafeAreaView>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
