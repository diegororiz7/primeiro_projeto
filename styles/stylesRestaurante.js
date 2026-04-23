import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginVertical: 5
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10
  },
  buttonAdd: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  itemText: {
    fontSize: 16
  },
  itemAtivo: {
    fontWeight: 'bold',
    color: 'green'
  },
  actions: {
    flexDirection: 'row',
    gap: 10
  },
  editar: {
    color: 'blue'
  },
  remover: {
    color: 'red',
    fontWeight: 'bold'
  }
});

export default styles;
