import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./../../screens/auth/WelcomeScreen";
import LoginScreen from "./../../screens/auth/LoginScreen";
import SignUpScreen from "./../../screens/auth/SignUpScreen";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
