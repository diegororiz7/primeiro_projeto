import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6f8'
  },

  scroll: {
    alignItems: 'center',
    paddingVertical: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },

  contador: {
    fontSize: 16,
    marginBottom: 20
  },

  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 4
  },

  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain'
  },

  musica: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  banda: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10
  },

  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },

  botao: {
    marginTop: 5
  }

});

export default styles;