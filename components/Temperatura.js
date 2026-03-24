import React, {useState} from 'react';
import {ScrollView,Text,View,TextInput,Modal,
  Switch,Alert,StyleSheet,Pressable} from 'react-native';
import styles from '../styles/stylesTemperatura';

export default function TemperaturaApp(){

  const [temperatura, setTemperatura] = useState('');
  const [modoFahrenheit, setModoFahrenheit] = useState(false);
  const [modal, setModal] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [historico, setHistorico] = useState([]);

  return(
    <ScrollView style = {styles.container}>
      
    </ScrollView>
  );
}

