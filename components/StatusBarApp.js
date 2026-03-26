import React, { useState } from 'react';
import {View,Text,TouchableOpacity,Pressable,ActivityIndicator,StyleSheet,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/stylesStatusBar';

export default function StatusBarApp() {
  const [corStatus, setCorStatus] = useState('black');
  const [oculto, setOculto] = useState(true);
  const [carregando, setCarregando] = useState(true);

  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'Estudar React Native', concluida: false },
    { id: '2', titulo: 'Preparar aula', concluida: false },
    { id: '3', titulo: 'Corrigir atividades', concluida: false },
  ]);

  const [corIndicador, setCorIndicador] = useState('green');
  const [tamanhoIndicador, setTamanhoIndicador] = useState('large');
  
  return (
    <View style={{ flex: 1 }}>

    </View>
  );
}
