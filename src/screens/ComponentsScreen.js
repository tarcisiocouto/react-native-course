// 1 - Importar as bibliotecas corretas;
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// 2- Criar o componente a ser renderizado;
const ComponentsScreen = () => {
    const greeting = <Text>Hello to you!</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This is the components sreen</Text>
            {greeting}
        </View>
    );
};

// 3 - Estilizar os componente;
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

// 4 - Exportar o componente;
export default ComponentsScreen;