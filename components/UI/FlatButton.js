import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const FlatButton = ({ children, onPress, flat }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        // ios on press
        onPress={onPress}
        style={[styles.buttonContainer, flat && styles.flatButtonContainer]}
        android_ripple={{ color: "#c9abf7" }}
      >
        <View style={styles.button}>
          <Text style={[styles.buttonText, flat && styles.flatButtonText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    maxWidth: 300,
    borderRadius: 30,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 30,
  },

  button: {
    alignItems: "center",
    padding: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },
  flatButtonContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary500,
  },
  flatButtonText: {
    color: GlobalStyles.colors.primary500,
  },
});
