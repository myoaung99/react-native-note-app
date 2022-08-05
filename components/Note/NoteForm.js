import React from "react";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";

const NoteForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.titleInput} placeholder="Title" />
      <TextInput
        style={styles.inputForm}
        multiline={true}
        placeholder="Start Typing..."
      />
    </View>
  );
};

export default NoteForm;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  titleInput: {
    fontSize: 24,
    marginBottom: 10,

    width: "50%",
    padding: 10,
  },
  inputForm: {
    textAlignVertical: "top",
    minHeight: "100%",
    fontSize: 18,
    padding: 10,
  },
});
