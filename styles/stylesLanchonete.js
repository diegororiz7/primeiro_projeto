import React, { useState, useCallback } from 'react';
import {StyleSheet} from 'react-native';

export default function App() {
  const [cardapio, setCardapio] = useState(cardapioInicial);
  const [atualizando, setAtualizando] = useState(false);
  const [inputs, setInputs] = useState({});

  const aoAtualizar = useCallback(() => {
    setAtualizando(true);
    setTimeout(() => {
      setCardapio(cardapioInicial);
      setAtualizando(false);
    }, 1000);
  }, []);

  const atualizarInput = (secao, campo, valor) => {
    setInputs((prev) => ({
      ...prev,
      [secao]: {
        ...prev[secao],
        [campo]: valor,
      },
    }));
  };

  const adicionarItem = (tituloSecao) => {
    const dados = inputs[tituloSecao];

    if (!dados || !dados.nome || !dados.preco) {
      Alert.alert('Erro', 'Preencha nome e valor');
      return;
    }

    const novoItem = {
      nome: dados.nome,
      preco: parseFloat(dados.preco),
      selecionado: false,
    };

    setCardapio((prev) =>
      prev.map((secao) =>
        secao.titulo === tituloSecao
          ? { ...secao, dados: [...secao.dados, novoItem] }
          : secao
      )
    );

    atualizarInput(tituloSecao, 'nome', '');
    atualizarInput(tituloSecao, 'preco', '');
  };

  const alternarSelecao = (tituloSecao, nomeItem) => {
    setCardapio((prev) =>
      prev.map((secao) =>
        secao.titulo === tituloSecao
          ? {
              ...secao,
              dados: secao.dados.map((item) =>
                item.nome === nomeItem
                  ? { ...item, selecionado: !item.selecionado }
                  : item
              ),
            }
          : secao
      )
    );
  };

  const removerItem = (tituloSecao, nomeItem) => {
    setCardapio((prev) =>
      prev.map((secao) =>
        secao.titulo === tituloSecao
          ? {
              ...secao,
              dados: secao.dados.filter((i) => i.nome !== nomeItem),
            }
          : secao
      )
    );
  };

  const itensSelecionados = cardapio.flatMap((secao) =>
    secao.dados.filter((item) => item.selecionado)
  );

  const total = itensSelecionados.reduce(
    (soma, item) => soma + item.preco,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cardápio Interativo</Text>

      <View style={styles.resumo}>
        <Text style={styles.resumoTitulo}>Resumo do Pedido</Text>

        {itensSelecionados.length === 0 ? (
          <Text>Nenhum item selecionado</Text>
        ) : (
          itensSelecionados.map((item, index) => (
            <Text key={index}>
              {item.nome} - R$ {item.preco}
            </Text>
          ))
        )}

        <Text style={styles.total}>Total: R$ {total}</Text>
      </View>

      <SectionList
        sections={cardapio.map((secao) => ({
          title: secao.titulo,
          data: secao.dados,
        }))}
        keyExtractor={(item, index) => item.nome + index}
        refreshControl={
          <RefreshControl refreshing={atualizando} onRefresh={aoAtualizar} />
        }
        renderItem={({ item, section }) => (
          <TouchableOpacity
            style={[
              styles.item,
              item.selecionado && { backgroundColor: '#2ecc71' },
            ]}
            onPress={() => alternarSelecao(section.title, item.nome)}
            onLongPress={() => removerItem(section.title, item.nome)}
          >
            <Text style={styles.itemText}>
              {item.selecionado ? '☑️' : '⬜'} {item.nome} - R$ {item.preco}
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.headerBox}>
            <Text style={styles.header}>{section.title}</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={inputs[section.title]?.nome || ''}
              onChangeText={(text) =>
                atualizarInput(section.title, 'nome', text)
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Preço"
              keyboardType="numeric"
              value={inputs[section.title]?.preco || ''}
              onChangeText={(text) =>
                atualizarInput(section.title, 'preco', text)
              }
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => adicionarItem(section.title)}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  resumo: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  resumoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  total: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerBox: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  header: {
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    marginBottom: 8,
    borderRadius: 6,
  },
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00FF7F',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
  },
});

export default styles;