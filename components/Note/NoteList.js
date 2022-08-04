import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ noteList }) => {
  const renderItem = ({ item }) => {
    return <NoteItem note={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={noteList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6d9ff",
  },
});
