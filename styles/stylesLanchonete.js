import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  resumo: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  resumoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  total: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerBox: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  header: {
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    marginBottom: 8,
    borderRadius: 6,
  },
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00FF7F',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
  },
});

export default styles;