import React, {useState, useRef} from 'react';
import {View,Text,Image,FlatList,
    Pressable,TouchableOpacity} from 'react-native';
import styles from '../styles/stylesInstagram';

export default function App(){

  const [posts, setPosts] = useState([
    {
      id:'1',
      usuario:'react_dev',
      descricao:'Aprendendo React Native 🚀',
      imagem:'https://picsum.photos/400/250?1',
      likes:12,
      comentarios:3,
      shares:1,
      curtido:false
    },
    {
      id:'2',
      usuario:'dev_mobile',
      descricao:'Criando meu primeiro app 📱',
      imagem:'https://picsum.photos/400/250?2',
      likes:8,
      comentarios:2,
      shares:0,
      curtido:false
    },
    {
      id:'3',
      usuario:'programador',
      descricao:'Estudando componentes de toque 👆',
      imagem:'https://picsum.photos/400/250?3',
      likes:20,
      comentarios:5,
      shares:2,
      curtido:false
    }
  ]);

  return(

    <View style={styles.container}>

    </View>

  );

}

