import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    fontSize: 18,
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#2980b9',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  error: {
    color: '#e74c3c',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#34495e',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2c3e50',
  },
});

export default styles;