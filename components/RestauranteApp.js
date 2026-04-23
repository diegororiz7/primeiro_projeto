import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/stylesRestaurante';

const STORAGE_KEY = '@AppRestaurante';

export default function RestauranteApp() {
  const [aberto, setAberto] = useState(false);
  const [prato, setPrato] = useState('');
  const [lista, setLista] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  return (
    <View style={styles.container}>

    </View>
  );
}
