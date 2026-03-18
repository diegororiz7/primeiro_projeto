import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    //padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    alignSelf: 'center'
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  imagem: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain",
    justifyContent: 'center',
    alignSelf: 'center'
  },

  nomeSerie: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  anoSerie: {
    fontSize: 16,
    color: '#555',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  visto: {
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 4
  },

  acoes: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 15,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  icone: {
    fontSize: 22,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  form: {
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    justifyContent: 'center',
    alignSelf: 'center'
  }

});

export default styles;