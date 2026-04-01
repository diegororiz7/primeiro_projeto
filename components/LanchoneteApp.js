import React, { useState, useCallback } from 'react';
import {Text,View,StatusBar,SafeAreaView,SectionList,Button,RefreshControl,TextInput,
        Alert,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import stylesLanchonete from '../styles/stylesLanchonete';

const menuInicial = [
  { title: 'Principal', data: ['Pizza', 'Burger', 'Churrasco'] },
  { title: 'Acompanhamento', data: ['Batata frita', 'Anel cebola', 'Dadinho tapioca'] },
  { title: 'Bebidas', data: ['Água', 'Refri', 'Cerveja'] },
  { title: 'Sobremesa', data: ['Cheese Cake', 'Sorvete'] },
];

export default function LanchoneteApp() {
  const [menu, setMenu] = useState(menuInicial);
  const [recarregando, setRecarregando] = useState(false);
  const [novoItem, setNovoItem] = useState('');
  const [selecionados, setSelecionados] = useState([]);
  const [busca, setBusca] = useState('');

  const recarregar = useCallback(() => {
    setRecarregando(true);
    setTimeout(() => {
      setMenu([...menuInicial]);
      setSelecionados([]);
      setRecarregando(false);
    }, 1000);
  }, []);

  const adicionarItem = (tituloSecao) => {
    if(!novoItem.trim() || novoItem.length < 3){
      alert('DIgite pelo menos 3 caracteres!');
      return;
    }
    setMenu((prev) =>
      prev.map((secao) => 
        secao.title === tituloSecao
          ? {...secao, data: [...secao.data, novoItem]}
          : secao
      )
    );
  }

  const removerUltimo = (tituloSecao) => {
    setMenu((prev) =>
      prev.map((secao) =>
        secao.title === tituloSecao && secao.data.length > 0
          ? { ...secao, data: secao.data.slice(0, -1) }
          : secao
      )
    );
  };

  const alternarSelecao = (item) => {
    if(selecionados.includes(item)){
      setSelecionados(selecionados.filter(i => i !== item));
    }else{
      setSelecionados([...selecionados, item]);
    }
  }

  const menuFiltrado = menu.map(secao => ({
    ...secao,
    data: secao.data.filter(item => 
      item.toLowerCase().includes(busca.toLowerCase())
    )
  }))

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.total}>Itens selecionados: {selecionados.join(', ')}</Text>

      <TextInput
        style = {styles.input}
        placeholder = 'Buscar item'
        value = {busca}
        onChangeText = {setBusca}
      />

      <SectionList
        sections = {menuFiltrado}
        keyExtractor = {(item) => item}
        renderItem = {({item}) => (
          <TouchableOpacity
            style = {[
              styles.item,
              selecionados.includes(item) && styles.selecionado
            ]}
            onPress = {() => alternarSelecao(item)}
          >
            <Text style = {styles.title}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader = {({section: {title}}) => (
          <View style = {styles.sectionHeader}>
            <Text style={styles.header}>{title}</Text>
            <TextInput
              style = {styles.input}
              placeholder = 'Novo item'
              value = {novoItem}
              onChangeText = {setNovoItem}
            />
            <Button title = 'Adicionar' onPress = {() => adicionarItem(title)} />
            <Button title = 'Remover' color = 'red' onPress = {() => removerUltimo(title)} />
          </View>
        )}
        refreshControl = {
          <RefreshControl
            refreshing = {recarregando}
            onRefresh = {recarregar}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
  },
  selecionado: {
    backgroundColor: 'lightgreen',
  },
  sectionHeader: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});