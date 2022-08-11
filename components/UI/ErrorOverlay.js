import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import { GlobalStyles } from "./../../constants/GlobalStyles";

const ErrorOverlay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
            style={styles.image}
            source={require("./../../assets/error-img.png")}
        />
      </View>

      <Text style={styles.errorMessage}>Something went wrong!</Text>
      <Text style={styles.errorMessage}>Please try again later </Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    textAlign: "center",
    fontSize: 20,
    color: GlobalStyles.colors.primary500,
  },
  imageContainer: {
    width: 380,
    height: 250,
    paddingTop: 10,
    alignSelf: "center",
    marginBottom: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});
