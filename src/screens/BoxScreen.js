import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Exercice: Layout</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.boxOne}></Text>
                <Text style={styles.boxTwo}></Text>
                <Text style={styles.boxThree}></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 20,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: 70,
    }, 
    boxOne: {
        borderWidth: 1,
        borderColor: 'orange',
        backgroundColor: 'orange',
        height: 100,
        width: 100
    },
    boxTwo: {
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 100,
        width: 100,
        // marginTop: 100 // one possible way
        top: 100 // other possible way to do

    },
    boxThree: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'purple',
        height: 100,
        width: 100
    }
});

export default BoxScreen;