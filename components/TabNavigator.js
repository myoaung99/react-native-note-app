import React from 'react';
import NoteScreen from "../screens/NoteScreen";
import TasksScreen from "../screens/TasksScreen";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function TabNavigator(props) {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator tabBarOptions={{
            style: {marginTop: insets.top}
        }}>
            <Tab.Screen name="Notes" component={NoteScreen}/>
            <Tab.Screen name="Tasks" component={TasksScreen}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;