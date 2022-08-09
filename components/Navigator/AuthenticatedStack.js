import React from "react";

import { GlobalStyles } from "../../constants/GlobalStyles";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NoteManageScreen from "../../screens/NoteManageScreen";
import NoteScreen from "../../screens/NoteScreen";
import TasksScreen from "../../screens/TasksScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: GlobalStyles.colors.primary500,
        },
        tabBarIndicatorStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarStyle: {
          marginTop: insets.top,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Notes" component={NoteScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
    </Tab.Navigator>
  );
}

function AuthenticatedStack() {
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

export default AuthenticatedStack;
