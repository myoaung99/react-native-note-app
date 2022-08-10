import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import { createUser } from "../../utils/http-request";

const SignUpScreen = () => {
  const confirmHandler = (email, password) => {
    console.log(email, password, " Sign Up");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../../assets/note-signup.png")}
        />
      </View>
      <AuthContent onAuthenticate={confirmHandler} />
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
    width: "95%",
    height: 250,
    paddingTop: 10,
    alignSelf: "center",
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  formContainer: {},
});
