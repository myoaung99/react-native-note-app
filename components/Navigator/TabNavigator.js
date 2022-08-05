import React from "react";
import NoteScreen from "../../screens/NoteScreen";
import TasksScreen from "../../screens/TasksScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../../constants/GlobalStyles";

const Tab = createMaterialTopTabNavigator();

function TabNavigator(props) {
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

export default TabNavigator;
