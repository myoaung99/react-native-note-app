import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from "react-native";

function NoteEditingScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>This is note editing screen</Text>
        </SafeAreaView>
    );
}

export default NoteEditingScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})