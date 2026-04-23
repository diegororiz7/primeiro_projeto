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
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  botao: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16
  },
  total: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  textoItem: {
    fontSize: 16
  },
  comprado: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  acoes: {
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