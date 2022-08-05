import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet } from "react-native";
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
});
