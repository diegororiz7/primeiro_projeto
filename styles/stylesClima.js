import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#2980b9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8
  },
  text: {
    fontSize: 16
  },
  updateBtn: {
    marginTop: 10,
    backgroundColor: '#2c3e50',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center'
  },
  histItem: {
    fontSize: 14,
    marginTop: 5
  }
});

export default styles;