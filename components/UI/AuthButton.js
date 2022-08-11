import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const AuthButton = ({ children, onPress, outline, style }) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        // ios on press
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? Platform.OS === "ios"
              ? [
                  styles.pressed,
                  styles.buttonContainer,
                  outline && styles.outlineButtonContainer,
                  outline && styles.outlinePressed,
                ]
              : [
                  styles.buttonContainer,
                  outline && styles.outlineButtonContainer,
                ]
            : [styles.buttonContainer, outline && styles.outlineButtonContainer]
        }
        android_ripple={{ color: "#c9abf7" }}
      >
        <View style={styles.button}>
          <Text
            style={[styles.buttonText, outline && styles.outlineButtonText]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    maxWidth: 250,
    borderRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
  },

  button: {
    alignItems: "center",
    padding: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },
  outlineButtonContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary500,
  },
  outlineButtonText: {
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
  outlinePressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
