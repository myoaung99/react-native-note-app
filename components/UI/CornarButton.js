import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Pressable,
  Platform,
} from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const CornarButton = ({ onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={styles.buttonContainer}
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
    bottom: 0,
    right: 0,
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
});
