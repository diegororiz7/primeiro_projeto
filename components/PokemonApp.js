import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import styles from '../styles/stylesPokemon';

const pokemonsLista = [
  { id: 1, nome: 'Bulbasaur' },
  { id: 2, nome: 'Ivysaur' },
  { id: 3, nome: 'Venusaur' },
  { id: 4, nome: 'Charmander' },
  { id: 5, nome: 'Charmeleon' },
  { id: 6, nome: 'Charizard' },
  { id: 7, nome: 'Squirtle' },
  { id: 8, nome: 'Wartortle' },
  { id: 9, nome: 'Blastoise' },
  { id: 10, nome: 'Caterpie' },
  { id: 11, nome: 'Metapod' },
  { id: 12, nome: 'Butterfree' },
  { id: 13, nome: 'Weedle' },
  { id: 14, nome: 'Kakuna' },
  { id: 15, nome: 'Beedrill' },
  { id: 16, nome: 'Pidgey' },
  { id: 17, nome: 'Pidgeotto' },
  { id: 18, nome: 'Pidgeot' },
  { id: 19, nome: 'Rattata' },
  { id: 20, nome: 'Raticate' },
];

export default function PokemonApp() {
  const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarPokemon = async (idPokemon) => {
    try{
      setLoading(true);
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
      const json = await resposta.json();
      const pokemon = {
        nome: json.name,
        habilidade: json.base_experience,
        peso: json.weight,
        altura: json.height,
        img: json.sprites.other['official-artwork'].front_default
      }
      setPokemonSelecionado(pokemon);
    }catch{
      Alert.alert('Erro','Não foi possível carregar as informações do Pokemón!');
    }finally{
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {styles.topo}>
          <Text style = {styles.topoTitulo}>
            Lista de Pokémons
          </Text>
        </View>

        {loading && (
          <ActivityIndicator />
        )}

        {pokemonSelecionado && (
          <View style = {styles.pokemonCaixa}>
            <Text style = {styles.pokemonNome}>
              Nome: {pokemonSelecionado.nome.toUpperCase()}
            </Text>

            <Text style = {styles.pokemonExperiencia}>
              Habilidade: {pokemonSelecionado.habilidade}
            </Text>

            <Text style = {styles.pokemonPeso}>
              Peso: {pokemonSelecionado.peso}
            </Text>

            <Text style = {styles.pokemonAltura}>
              Altura: {pokemonSelecionado.altura}
            </Text>

            <Image
              style = {styles.pokemonImagem}
              source = {{uri: pokemonSelecionado.img}}
            />
          </View>
        )}

        {pokemonsLista.map(pokemon => (
          <View key = {pokemon.id} style = {styles.cardConteudo}>
            <Text style = {styles.cardTitulo}>
              {pokemon.nome}
            </Text>

            <Button
              title = 'Exibir dados'
              color = '#120A8F'
              onPress={() => buscarPokemon(pokemon.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}