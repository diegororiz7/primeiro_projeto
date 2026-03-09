import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/stylesPaises';
import { PaisFuncao, PaisClasse, PaisArrow } from './PropsPaises';

export default function PaisesApp(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>
                Função vs. Classe
            </Text>

            <PaisFuncao
                nome = 'Brasil'
                capital = 'Brasília'
                idioma = 'Português'
                bandeira = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png'
            />

            <PaisClasse
                nome = 'Alemanda'
                capital = 'Berlim'
                idioma = 'Alemão'
                bandeira = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png'
            />

            <PaisArrow
                nome = 'França'
                capital = 'Paris'
                idioma = 'Francês'
                bandeira = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'
            />
        </View>
    );
}