import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  Image,
  Alert,
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

  return (
    <View style={styles.container}>

    </View>
  );
}