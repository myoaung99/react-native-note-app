import React from "react";
import { Button, View, StyleSheet } from "react-native";

const CornarButton = () => {
  return (
    <View style={styles.button}>
      <Button title="+" onPress={() => console.log("cornar btn")} />
    </View>
  );
};

export default CornarButton;

const styles = StyleSheet.create({
  button: {},
});
