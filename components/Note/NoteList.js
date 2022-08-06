import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet, Text } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ noteList }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("ManageNote", {
        noteId: item.id,
      });
    };
    return <NoteItem note={item} onPress={pressHandler} />;
  };

  if (noteList.length <= 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>There is no notes yet.</Text>
        <Text style={styles.text}>Try to create new ones.</Text>
      </View>
    );
  }
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
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
});
