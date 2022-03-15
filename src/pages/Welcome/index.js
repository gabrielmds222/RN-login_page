import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome(){
  return(
    <View style={styles.container}>
        <Text>Tela Bem vindo</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container: {

    }
})