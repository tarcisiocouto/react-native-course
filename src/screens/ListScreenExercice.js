import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';

const ListScreenExercice = () => {
    const friends = [
        {name: 'Friend #1', age: '1'},
        {name: 'Friend #2', age: '2'},
        {name: 'Friend #3', age: '3'},
        {name: 'Friend #4', age: '4'},
        {name: 'Friend #5', age: '5'},
        {name: 'Friend #6', age: '6'},
        {name: 'Friend #7', age: '7'},
    ];
    return (
            <FlatList
                keyExtractor={(friend) => friend.age} 
                data={friends}
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                }}
            />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default ListScreenExercice;