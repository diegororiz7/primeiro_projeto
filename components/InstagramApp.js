import React, {useState, useRef} from 'react';
import {View,Text,Image,FlatList,
    Pressable,TouchableOpacity,
    TouchableHighlight} from 'react-native';
import styles from '../styles/stylesInstagram';

export default function InstagramApp(){

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

  const curtirPost = (id) => {
    const novaLista = posts.map(post => {
      if(post.id === id){
        if(post.curtido && item.likes > 0){
          return {...post, curtido: false, likes: post.likes - 1}
        }else{
          return {...post, curtido: true, likes: post.likes + 1}
        }
      }
      return post;
    })
    setPosts(novaLista);
  }

  const comentarPost = (id) => {
    const novaLista = posts.map(post => {
      if(post.id === id){
        return {...post, comentarios: post.comentarios + 1}
      }
      return post;
    })
    setPosts(novaLista);
  }

  const compartilharPost = (id) => {
    const novaLista = posts.map(post => {
      if(post.id === id){
        return {...post, shares: posts.shares + 1}
      }
      return post;
    })
    setPosts(novaLista);
  }

  const resetarCurtidas = (id) => {
    const novaLista = posts.map(post => {
      if(post.id === id){
        return{...post, curtido:  false, likes: 0}
      }
      return post;
    })
    setPosts(novaLista);
  }

  const ultimoClique = useRef(null);

  const curtirDuplo = (id) => {
    const momento = Date.now();

    if(ultimoClique.current && momento - ultimoClique.current < 300){
      curtirPost(id);
    }

    ultimoClique.current = momento;
  }

  const renderItem = ({item}) => (
    <View style = {styles.post}>
      <Text style = {styles.usuario}>👤{item.usuario}</Text>

      <Pressable
        onPress = {() => curtirDuplo(item.id)}
      >
        <Image
          style = {styles.imagem}
          source = {{uri: item.imagem}}
        />
      </Pressable>

      <View style = {styles.acoes}>
        <Pressable
          onPress = {() => curtirPost(item.id)}
          onLongPress={() => resetarCurtidas(item.id)}
          delayLongPress={700}
          style = {({pressed}) =>[
            styles.botao,
            pressed && styles.botaoPressionado
          ]}
        >
          <Text style = {styles.textoBotao}>
            {item.curtido ? '❤️ Curtido' : '🤍 Curtir'}
          </Text>
        </Pressable>

        <TouchableHighlight
          onPress={() => comentarPost(item.id)}
          underlayColor={'blue'}
        >
          <Text style = {styles.textoBotao}>💬Comentar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => compartilharPost(item.id)}
          underlayColor={'blue'}
        >
          <Text style = {styles.textoBotao}>🔁Compartilhar</Text>
        </TouchableHighlight>
      </View>

      <Text>❤️ {item.likes} curtidas</Text>
      <Text>💬 {item.comentarios} comentários</Text>
      <Text>🔁 {item.shares} compartilhamentos</Text>
      <Text style = {styles.descricao}>{item.descricao}</Text>
    </View>
  );

  return(
    <View style={styles.container}>
      <FlatList
        data = {posts}
        keyExtractor={(item) => item.id}
        renderItem = {renderItem}
        contentContainerStyle = {{alignItems: 'center'}}
      />
    </View>
  );
}

