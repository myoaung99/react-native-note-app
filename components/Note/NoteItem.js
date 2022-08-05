import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import { removeNote } from "../../store/noteList-slice";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { useDispatch } from "react-redux";

const NoteItem = ({ note, onPress }) => {
  const dispatch = useDispatch();
  const longPressHandler = (noteId) => {
    Alert.alert("Are your sure?", "The following note will be deleted.", [
      {
        text: "Delete",
        onPress: () => dispatch(removeNote({ noteId: note.id })),
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const excerpt = note.text.split(" ").slice(0, 7).join(" ");

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.outerContainer]}>
        <Pressable
          onPress={onPress}
          onLongPress={longPressHandler.bind(this, note.id)}
          android_ripple={{ color: "#ccc" }}
          // TODO: test press effect on iPhone
          style={({ pressed }) =>
            pressed
              ? Platform.OS === "ios"
                ? [styles.innerContainer, styles.pressed]
                : styles.innerContainer
              : styles.innerContainer
          }
        >
          <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteExcerpt}>{excerpt}......</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  outerContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 0,
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    // TODO: test this shadow effect on iPhone
    // ios shandow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  innerContainer: {
    minHeight: 90,

    backgroundColor: "white",
    borderRadius: 10,

    borderLeftColor: GlobalStyles.colors.primary500,
    borderLeftWidth: 4,
  },
  noteContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  noteExcerpt: {
    color: "gray",
  },
  pressed: {
    opacity: 0.75,
  },
});
