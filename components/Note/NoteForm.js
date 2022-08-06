import React, { useState, useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Text, Keyboard } from "react-native";
import HeaderText from "../UI/HeaderText";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { storeNoteServer } from "../../utils/http-request";
import LoadingOverlay from "../UI/LoadingOverlay";

const NoteForm = ({ onConfirm, editingNote }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: {
      value: editingNote ? editingNote.title : "",
      isValid: true,
    },
    text: {
      value: editingNote ? editingNote.text : "",
    },
  });
  const navigation = useNavigation();

  const saveHandler = async () => {
    // TODO: Validation
    setIsFetching(true);
    const { title, text } = inputValues;
    const titleIsValid = title.value.trim().length > 0;
    if (!titleIsValid) {
      console.log("is invalid");
      setInputValues((currInput) => {
        return {
          title: { value: currInput.title.value, isValid: titleIsValid },
          text: { value: currInput.text.value },
        };
      });
      setIsFetching(false);
      return;
    }

    onConfirm({
      title: title.value,
      text: text.value,
      date: new Date().toISOString(),
    });

    Keyboard.dismiss();
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

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        autoCapitalize="sentences"
        isValid={inputValues.title.isValid}
        autoCorrect={false}
        autoFocus={true}
        value={inputValues.title.value}
        onChangeText={textInputHandler.bind(this, "title")}
      />
      {!inputValues.title.isValid && (
        <Text style={styles.errorText}>At least enter title to save</Text>
      )}
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
  errorText: {
    color: "#e84938",
    textAlign: "center",
    marginTop: -20,
  },
});
