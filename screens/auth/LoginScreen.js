import React, {useContext, useState} from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import {loginUser} from "../../utils/http-request";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import {AuthContext} from "../../store/auth-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [hasError, setHasError] = useState(false);

  const authCtx = useContext(AuthContext);

  const confirmHandler = async ({email, password})=>{
    setIsAuthenticating(true);
    try{
      const idToken = await loginUser(email, password);
      authCtx.authenticate(idToken);
      await AsyncStorage.setItem('token', idToken);
    }catch(e){
      setHasError(true);
      setIsAuthenticating(false);
    }
  }

  if(hasError && !isAuthenticating){
    return <ErrorOverlay/>
  }

  if(isAuthenticating) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../../assets/note-login.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AuthContent isLogin onAuthenticate={confirmHandler} />
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
