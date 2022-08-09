import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "./../../constants/GlobalStyles";

const ErrorOverlay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Something went wrong!</Text>
      <Text style={styles.errorMessage}>Please try again later...</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
  },
});
