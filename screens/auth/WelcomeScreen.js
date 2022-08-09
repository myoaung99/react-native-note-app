import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import FlatButton from "../../components/UI/FlatButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../../assets/note-list.png")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Hello !</Text>
        <Text style={styles.description}>
          Best place to store inner voice and look back anytime anywhere
        </Text>
      </View>

      <View style={styles.button}>
        <FlatButton>Login</FlatButton>
      </View>

      <View style={styles.button}>
        <FlatButton flat>Signup</FlatButton>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 30,
    width: 250,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    flexDirection: "row",
    marginVertical: 8,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "gray",
    textAlign: "center",
    width: "80%",
    maxWidth: 300,
  },
});
