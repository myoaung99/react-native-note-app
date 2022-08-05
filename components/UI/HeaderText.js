import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function HeaderText({ onPress, text, color }) {
  const route = useRoute();

  return (
    <Pressable
      onPress={route.params?.onSave}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Text style={[styles.headerText, { color: color }]}>{text}</Text>
    </Pressable>
  );
}

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    padding: 10,
    margin: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
