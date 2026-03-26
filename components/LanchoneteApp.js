import React, { useState, useCallback } from 'react';
import {Text,View,StatusBar,SafeAreaView,SectionList,Button,RefreshControl,TextInput,
        Alert,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import styles from '../styles/stylesLanchonete';

const initialMenu = [
  { title: 'Principal', data: ['Pizza', 'Burger', 'Churrasco'] },
  { title: 'Acompanhamento', data: ['Batata frita', 'Anel cebola', 'Dadinho tapioca'] },
  { title: 'Bebidas', data: ['Água', 'Refri', 'Cerveja'] },
  { title: 'Sobremesa', data: ['Cheese Cake', 'Sorvete'] },
];

export default function LanchoneteApp() {
  const [menu, setMenu] = useState(initialMenu);
  const [recarregando, setrecarregando] = useState(false);
  const [novoItem, setnovoItem] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
}
