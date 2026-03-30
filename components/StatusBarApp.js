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
  
  const alternarStatus = (id) => {
    setTarefas((prev) =>
      prev.map((t) => 
        t.id === id ? {...t, concluida: !t.concluida } : t
      )
    )
  }

  const removerTarefa = (id) => {
    setTarefas((prev) => 
      prev.filter((t) =>
        t.id !== id 
      )
    )
  }

  const Botao = ({cor, texto, aoPressionar}) => (
    <TouchableOpacity
      style = {[styles.botao, {backgroundColor: cor}]}
      onPress={aoPressionar}
    >
      <Text style = {styles.texto}>{texto}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={{ flex: 1, marginTop: 40  }}>
      <StatusBar
        style = 'dark'
        animated = {true}
        hidden = {oculto}
      />

      <Pressable
        style = {[styles.press, {backgroundColor: oculto ? 'green' : 'red'}]}
        onPress={() => setOculto(!oculto)}
      >
        <Text style = {styles.texto}>
          {oculto ? 'Exibir Barra' : 'Ocultar Barra'}
        </Text>
      </Pressable>

      <Text style = {styles.titulo}>Indicador de carregamento</Text>

      {carregando && (
        <ActivityIndicator
          style = {styles.indicador}
          color = {corIndicador}
          size  = {tamanhoIndicador}
          animating = {true}
        />
      )}

      <Pressable
        style={[styles.press, {backgroundColor: carregando ? 'red' : 'green'}]}
        onPress = {() => setCarregando(!carregando)}
      >
        <Text style={styles.texto}>
          {carregando ? 'Ocultar Indicador' : 'Exibir Indicador'}
        </Text>
      </Pressable>

      <Botao
        cor = 'green'
        texto = 'Botão Verde'
        aoPressionar={() => {
          setCorIndicador('green')
          setTamanhoIndicador('large')
        }}
      />

      <Botao
        cor = 'red'
        texto = 'Botão Vermelho'
        aoPressionar={() => {
          setCorIndicador('red')
          setTamanhoIndicador('small')
        }}
      />

      <FlatList
        data = {tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style = {styles.tarefa}>
            <Text style = {[
              styles.textoTarefa,
              {textDecorationLine: item.concluida ? 'line-through' : 'none'}
            ]}>
              {item.titulo}
            </Text>

            <View style = {styles.acoes}>
              <TouchableOpacity
                style = {[styles.botaoPequeno, {backgroundColor: 'green'}]}
                onPress={() => alternarStatus(item.id)}
              >
                <Text style = {styles.texto}>✓</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style = {[styles.botaoPequeno, {backgroundColor: 'red'}]}
                onPress={() => removerTarefa(item.id)}
              >
                <Text style = {styles.texto}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
