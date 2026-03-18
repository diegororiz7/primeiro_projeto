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

  const adicionarSerie = () => {
    if(!nome.trim() || !ano.trim()){
      alert('Informe o nome e ano da série!');
      return;
    }

    const novaSerie = {
      id: Date.now().toString(),
      nome,
      ano,
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
      visto: false,
      curtido: false
    }

    setSeries([...series, novaSerie]);
    setNome('');
    setAno('');
  }

  const removerSerie = (id) => {
    setSeries(series.filter(s => (
      s.id !== id
    )));
  }

  const curtirSerie = (id) => {
    setSeries(series.map(s => (
      s.id === id ? {...s, curtido: !s.curtido} : s
    )))
  }

  const marcarVisto = (id) => {
    setSeries(series.map(s => (
      s.id === id ? {...s, visto: !s.visto} : s
    )))
  }

  const renderItem = ({item}) => (
    <View style = {[styles.card,
      item.visto && {backgroundColor: '#d5f5e3'}
    ]}>
      <Image
        style = {styles.imagem}
        source = {{uri: item.imagem}}
      />

      <Text style = {styles.nomeSerie}>{item.nome}</Text>
      <Text style = {styles.anoSerie}>{item.ano}</Text>

      {item.visto &&
        <Text style = {styles.visto}>
          ✅ Já assisti!
        </Text>
      }

      <View style = {styles.acoes}>
        <TouchableOpacity
          onPress={() => curtirSerie(item.id)}
        >
          <Text style = {styles.icone}>
            {item.curtido ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => marcarVisto(item.id)}
        >
          <Text style = {styles.icone}>
            {item.visto ? '❌' : '✅'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => removerSerie(item.id)}
        >
          <Text style = {styles.icone}>
            🗑
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return(
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.titulo}>🎬 Fasm Flix</Text>

        <FlatList
          data = {series}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle = {{paddingBottom: 20}}
        />

        <View style = {styles.form}>
          <TextInput
            placeholder = 'Nome da série'
            value = {nome}
            onChangeText = {setNome}
            style = {styles.input}          
          />

          <TextInput
            placeholder = 'Ano da série'
            value = {ano}
            onChangeText = {setAno}
            keyboardType= {'numeric'}
            style = {styles.input}
          />

          <View style={{
            width: '100%',
            alignSelf: 'center'
          }}>
            <Button
              title='Adicionar série'
              color='blue'
              onPress={adicionarSerie}
            />
          </View>
        </View>
    </SafeAreaView>
  );
}