import React from "react";
import { Platform, View, StyleSheet, Text, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const CornarButton = ({ onPress, style }) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? Platform.OS === "ios"
              ? [styles.buttonContainer, styles.pressed]
              : styles.buttonContainer
            : styles.buttonContainer
        }
        android_ripple={{ color: "#c9abf7" }}
        // TODO: add ripple effect on iOS
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CornarButton;

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    margin: 20,
    borderRadius: 30,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    elevation: 8,
    // TODO: test this shadow effect on iPhone
    // ios shandow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  buttonContainer: {
    width: 60,
    height: 60,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 30,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 26,
  },

  pressed: {
    opacity: 0.75,
  },
});
