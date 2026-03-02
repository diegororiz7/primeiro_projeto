import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.texto}>Aula I</Text>
      <Text style = {styles.texto2}>React Native 02/03/2026</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 30
  },
  texto2:{
    color: '#00000',
    fontSize: 20,
    fontStyle: 'italic'
  }
});
