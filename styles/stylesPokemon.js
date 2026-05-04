import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  topo: {
    height: 80,
    padding: 20,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: '#120A8F',
  },
  topoTitulo: {
    fontSize: 22,
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  cardConteudo: {
    borderWidth: 1,
    borderColor: '#1C1C1C',
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  cardTitulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#656565',
  },
  pokemonCaixa: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pokemonNome: {
    fontSize: 22,
  },
  pokemonExperiencia: {
    fontSize: 18,
  },
  pokemonPeso: {
    fontSize: 18,
  },
  pokemonAltura: {
    fontSize: 18,
  },
  pokemonImagem: {
    width: 150,
    height: 150,
  },
});

export default styles;