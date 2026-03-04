import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from '../styles/stylesPerfil';

export default function App(){
  return(
    <View style = {styles.container}>
      <Image
        style = {styles.foto}
        source={{uri: 'https://avatars.githubusercontent.com/u/93293247?v=4'}}
      />

      <Text style = {styles.nome}>
        Diego Roriz Fernandes
      </Text>

      <Text style = {styles.cargo}>
        Desenvolvedor Mobile
      </Text>

      <View style = {styles.card}>
        <Text style = {styles.titulo}>
          Experiência
        </Text>

        <Text style = {styles.texto}>💼 FASM</Text>
        <Text style = {styles.texto}>💼 Fundação</Text>
        <Text style = {styles.texto}>💼 Rubeus</Text>
      </View>

      <View style = {styles.card}>
        <Text style = {styles.titulo}>
          Formação
        </Text>

        <Text style = {styles.texto}>🎓 Análise e 
          Desenvolvimento de Sistemas</Text>
        <Text style = {styles.texto}>🎓 Administração</Text>
      </View>

      <View style = {styles.card}>
        <Text style = {styles.titulo}>
          Competências
        </Text>

        <Text style = {styles.texto}>✅ React Native</Text>
        <Text style = {styles.texto}>✅ Flutter</Text>
        <Text style = {styles.texto}>✅ Firebase</Text>
        <Text style = {styles.texto}>✅ SQL</Text>
      </View>
    </View>    
  );
}
