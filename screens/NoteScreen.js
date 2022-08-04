import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from "react-native";

function NoteScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>This is note screen</Text>
        </SafeAreaView>
    );
}

export default NoteScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})