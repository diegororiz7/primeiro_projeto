import React, { useState, useCallback } from 'react';
import {Text,View,StatusBar,SafeAreaView,SectionList,Button,RefreshControl,TextInput,
        StyleSheet,TouchableOpacity} from 'react-native';
import styles from '../styles/stylesLanchonete';


const menuInicial = [
  { title: 'Principal', data: ['Pizza', 'Burger', 'Churrasco'] },
  { title: 'Acompanhamento', data: ['Batata frita', 'Anel cebola', 'Dadinho tapioca'] },
  { title: 'Bebidas', data: ['Água', 'Refri', 'Cerveja'] },
  { title: 'Sobremesa', data: ['Cheese Cake', 'Sorvete'] },
];

export default function LanchoneteApp() {
  const [menu, setMenu] = useState(menuInicial);
  const [recarregando, setRecarregando] = useState(false);
  const [novoItem, setNovoItem] = useState('');
  const [selecionados, setSelecionados] = useState([]);
  const [busca, setBusca] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
}
