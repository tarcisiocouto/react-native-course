import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Text style={styles.text}>Hi Tarcisio!</Text>
        <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo"
        />
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Exercices</Text>
        <Button 
          title="Go to Components Exercice"
          onPress={() => navigation.navigate('ExerciceComponents')}
        />
        <Button 
          title="Go to List Exercice"
          onPress={() => navigation.navigate('ListExercice')}
        />
        <Button 
          title="Go to Image Screen"
          onPress={() => navigation.navigate('Image')}
        />
         <Button 
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
