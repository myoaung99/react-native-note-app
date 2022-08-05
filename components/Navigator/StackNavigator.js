import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import NoteManageScreen from "../../screens/NoteManageScreen";
import { GlobalStyles } from "../../constants/GlobalStyles";
const Stack = createStackNavigator();

function StackNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ManageNote" component={NoteManageScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
