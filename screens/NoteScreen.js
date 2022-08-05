import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import NoteList from "../components/Note/NoteList";
import CornarButton from "../components/UI/CornarButton";
import { DUMMY_NOTES } from "./../data/DummyNotes";

function NoteScreen({ navigation }) {
  const btnPressHandler = () => {
    navigation.navigate("ManageNote");
  };
  return (
    <SafeAreaView style={styles.screen}>
      <NoteList noteList={DUMMY_NOTES} />
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
