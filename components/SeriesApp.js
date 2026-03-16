import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList, StyleSheet,
        SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/stylesSeries';

export default function SeriesApp(){
    const [series, setSeries] = useState([
    {
      id: '1',
      nome: 'Friends',
      ano: 1994,
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/250px-Friends_logo.svg.png',
      curtido: false,
      visto: false
    },
    {
      id: '2',
      nome: 'Breaking Bad',
      ano: 2008,
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/250px-Breaking_Bad_logo.svg.png',
      curtido: false,
      visto: false
    },
    {
      id: '3',
      nome: 'Lost',
      ano: 2004,
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lost_main_title.svg/250px-Lost_main_title.svg.png',
      curtido: false,
      visto: false
    }
  ]);

  const [nome, setNome] = useState('');
  const [ano, setAno]   = useState('');

  return(
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.titulo}>Fasm Flix</Text>
    </SafeAreaView>
  );
}