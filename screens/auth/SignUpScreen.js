import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";

const SignUpScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../../assets/note-signup.png")}
        />
      </View>
      <AuthContent onAuthenticate={() => {}} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: 270,
    alignSelf: "center",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {},
});
