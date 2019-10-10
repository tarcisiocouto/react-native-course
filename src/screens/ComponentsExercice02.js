import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsExercice02 = () => {
    const name = 'Tarcisio';

    return (
        <View>
            <Text style={styles.textStyle} >Getting started with react native!</Text>
            <Text style={styles.newTextStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },

    newTextStyle: {
        fontSize: 20
    }
});

export default ComponentsExercice02;