import React from "react";
import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

const NoteItem = ({ note }) => {
  const excerpt = note.text.split(" ").slice(0, 7).join(" ");
  return (
    <Pressable
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
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  innerContainer: {
    width: "100%",
    minHeight: 90,
    backgroundColor: "white",
  },
  noteContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,

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
