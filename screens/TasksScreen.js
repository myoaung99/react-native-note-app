import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from "react-native";

function TasksScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>This is tasks screen</Text>
        </SafeAreaView>
    );
}

export default TasksScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})