import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: 'center',
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
  },
  botao: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  press: {
    backgroundColor: 'grey',
    padding: 12,
    marginVertical: 20,
    borderRadius: 8,
  },
  indicador: {
    marginVertical: 15,
  },
  tarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  textoTarefa: {
    color: '#fff',
    flex: 1,
  },
  acoes: {
    flexDirection: 'row',
    gap: 10,
  },
  botaoPequeno: {
    padding: 8,
    borderRadius: 6,
  },
});

export default styles;