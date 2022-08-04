import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CornarButton from "../components/CornarButton";

function NoteScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>This is note screen</Text>
      <CornarButton />
    </SafeAreaView>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
