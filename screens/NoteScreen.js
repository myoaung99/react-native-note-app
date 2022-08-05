import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import NoteList from "../components/Note/NoteList";
import CornarButton from "../components/UI/CornarButton";
import { setNotes } from "../store/noteList-slice";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotesServer } from "../utils/http-request";

function NoteScreen({ navigation }) {
  const noteList = useSelector((state) => state.notes.noteList);
  const dispatch = useDispatch();

  const btnPressHandler = () => {
    navigation.navigate("ManageNote");
  };

  useEffect(() => {
    const fetch = async () => {
      const notes = await fetchNotesServer();
      dispatch(setNotes(notes));
    };

    fetch();
  }, []);

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
