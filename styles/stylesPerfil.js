import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e8eef5',
    alignItems: 'center',
    paddingTop: 60
  },
  foto:{
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10
  },
  nome:{
    fontSize: 26,
    fontWeight: 'bold'
  },
  cargo:{
    fontSize: 18,
    color: 'grey',
    marginBottom: 20
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  texto:{
    fontSize: 16,
  },
  card:{
    backgroundColor: 'white',
    width: '25%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
  }
})

export default styles;