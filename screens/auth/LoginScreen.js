import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../../assets/note-login.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AuthContent isLogin onAuthenticate={() => {}} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 30,
    width: 270,
    height: 270,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {},
});
