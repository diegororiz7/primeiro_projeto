import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    marginVertical: 20,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  resultBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    width: '90%',
  },
  resultLine: {
    fontSize: 18,
    marginVertical: 4,
    color: '#2e7d32',
    fontWeight: '500',
  },
});

export default styles;