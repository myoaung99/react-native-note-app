import React, { useState, useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";
import HeaderText from "../UI/HeaderText";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";

const NoteForm = ({ onConfirm, editingNote }) => {
  console.log("noteform", editingNote);
  const [inputValues, setInputValues] = useState({
    title: {
      value: editingNote ? editingNote.title : "",
      isValid: true,
    },
    text: {
      value: editingNote ? editingNote.text : "",
      isValid: true,
    },
  });
  const navigation = useNavigation();

  const saveHandler = () => {
    // TODO: Validation
    onConfirm({ title: inputValues.title.value, text: inputValues.text.value });
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderText
          onSave={saveHandler}
          text="Save"
          color={GlobalStyles.colors.confirm500}
        />
      ),
    });
  }, [inputValues]);

  const textInputHandler = (type, enteredText) => {
    setInputValues((currentValue) => ({
      ...currentValue,
      [type]: {
        value: enteredText,
        isValid: true,
      },
    }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        autoCapitalize="sentences"
        autoCorrect={false}
        autoFocus={true}
        value={inputValues.title.value}
        onChangeText={textInputHandler.bind(this, "title")}
      />
      <TextInput
        style={styles.inputForm}
        multiline={true}
        autoCapitalize="sentences"
        autoCorrect={false}
        placeholder="Start Typing..."
        value={inputValues.text.value}
        onChangeText={textInputHandler.bind(this, "text")}
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
    padding: 10,
  },
  inputForm: {
    textAlignVertical: "top",
    minHeight: "100%",
    fontSize: 18,
    padding: 10,
  },
});
