import React, { useState, useCallback } from 'react';
import {Text,View,StatusBar,SafeAreaView,SectionList,Button,RefreshControl,TextInput,
        Alert,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import styles from '../styles/stylesLanchonete';

const initialMenu = [
  { title: 'Principal', data: [{ nome: 'Pizza', preco: 30 }, { nome: 'Burger', preco: 25 }, { nome: 'Churrasco', preco: 40 }] },
  { title: 'Acompanhamento', data: [{ nome: 'Batata frita', preco: 15 }, { nome: 'Anel cebola', preco: 18 }, { nome: 'Dadinho tapioca', preco: 20 }] },
  { title: 'Bebidas', data: [{ nome: 'Água', preco: 5 }, { nome: 'Refri', preco: 8 }, { nome: 'Cerveja', preco: 12 }] },
  { title: 'Sobremesa', data: [{ nome: 'Cheese Cake', preco: 22 }, { nome: 'Sorvete', preco: 10 }] },
];

export default function LanchoneteApp() {
  const [menu, setMenu] = useState(initialMenu);
  const [recarregando, setrecarregando] = useState(false);
  const [novosItens, setNovosItens] = useState({});
  const [novosPrecos, setNovosPrecos] = useState({});
  const [selecionados, setSelecionados] = useState([]);

  const recarregar = useCallback(() => {
    setrecarregando(true);
    setTimeout(() => {
      setMenu([...initialMenu]);
      setSelecionados([]);
      setrecarregando(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
}
