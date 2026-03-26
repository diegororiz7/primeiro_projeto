import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: StatusBar.currentHeight
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
  },
  selecionado: {
    backgroundColor: 'lightgreen',
  },
  sectionHeader: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default styles;