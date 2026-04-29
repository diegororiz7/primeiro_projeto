import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/stylesCompras';

const STORAGE_KEY = '@AppComprasValor';

export default function ComprasApp() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [lista, setLista] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  async function recuperar(){
    const resposta = await AsyncStorage.getItem(STORAGE_KEY);
    if(resposta){
      setLista(JSON.parse(resposta));
    }
  }

  async function salvarLista(novaLista){
    setLista(novaLista);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
  }

  async function adicionar(){
    const valor = parseFloat(preco.replace(',','.'));

    if(!nome.trim() || isNaN(preco) || preco <= 0){
      Alert.alert('Atenção','Informe um nome e preço válido!');
      return;
    }

    if(editandoId){
      const novaLista = lista.map(item =>
        item.id === editandoId
        ? {...item, nome: nome.trim(), preco: valor}
        : item
      )
      salvarLista(novaLista);
      setEditandoId(null);
    }else{
      const novo = {
        id: Date.now().toString(),
        nome: nome.trim(),
        preco: valor,
        comprado: false
      }
      const novaLista = [...lista, novo];
      salvarLista(novaLista);
    }
    setNome('');
    setPreco('');
  }

  function editar(item){
    setNome(item.nome);
    setPreco(item.preco.toString());
    setEditandoId(item.id);
  }

  function remover(id){
    const novaLista = lista.filter(item => item.id !== id);
    salvarLista(novaLista);
  }

  function alternarComprado(id){
    const novaLista = lista.map(item => 
      item.id === id
      ? {...item, comprado: !item.comprado}
      :item
    )
    salvarLista(novaLista);
  }

  function calcularTotal(){
    return lista
            .filter(item => item.comprado)
            .reduce((total, item) => total + item.preco, 0)
  }

  useEffect(() =>{
    recuperar();
  },[]);

  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Lista de Compras</Text>

      <TextInput
        style = {styles.input}
        value = {nome}
        onChangeText = {setNome}
        placeholder= 'Nome do produto'
      />

      <TextInput
        style = {styles.input}
        value = {preco}
        onChangeText = {setPreco}
        placeholder= 'Preço do produto'
        keyboardType= {'numeric'}
      />

      <TouchableOpacity
        style = {styles.botao}
        onPress={adicionar}
      >
        <Text style = {styles.botaoTexto}>
          {editandoId ? 'Salvar' : 'Adicionar'}
        </Text>
      </TouchableOpacity>

      <Text style = {styles.total}>
        Total: R${calcularTotal().toFixed(2)}
      </Text>

      <FlatList
        data = {lista}
        keyExtractor = {(item) => item.id}
        style = {{marginTop: 10}}
        renderItem = {({item}) => (
          <View style = {styles.item}>
            <TouchableOpacity
              onPress = {() => alternarComprado(item.id)}
            >
              <Text style = {[
                styles.textoItem,
                item.comprado && styles.comprado
              ]}>
                {item.nome} - R${item.preco.toFixed(2)}
              </Text>
            </TouchableOpacity>

            <View style = {styles.acoes}>
              <TouchableOpacity
                onPress = {() => editar(item)}
              >
                <Text style = {styles.editar}>✏️</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress = {() => remover(item.id)}
              >
                <Text style = {styles.remover}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
