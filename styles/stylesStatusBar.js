import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  button: {
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
  indicator: {
    marginVertical: 15,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  taskText: {
    color: '#fff',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  smallButton: {
    padding: 8,
    borderRadius: 6,
  },
});

export default styles;