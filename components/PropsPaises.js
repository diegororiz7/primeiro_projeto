import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/stylesPaises';

export function PaisFuncao(props){

    return(
        <View style = {styles.card}>
            <Text style = {styles.titulo}>
                Função - {props.nome}
            </Text>

            <Image
                style = {styles.bandeira}
                source = {{uri: props.bandeira}}
            />

            <Text>
                Capital: {props.capital}
            </Text>

            <Text>
                Idioma: {props.idioma}
            </Text>
        </View>
    );
}

export class PaisClasse extends Component{
    render(){
        return(
            <View style = {styles.card}>
                <Text style = {styles.titulo}>
                    Classe - {this.props.nome}
                </Text>

                <Image
                    style = {styles.bandeira}
                    source = {this.props.bandeira}
                />

                <Text>
                    Capital: {this.props.capital}
                </Text>

                <Text>
                    Idioma: {this.props.idioma}
                </Text>
            </View>
        );
    }
}

export const PaisArrow = ({idioma, nome, bandeira, capital}
    
) =>{
    return(
        <View style = {styles.card}>
            <Text style = {styles.titulo}>
                Arrow - {nome}
            </Text>

            <Image
                style = {styles.bandeira}
                source = {{uri: bandeira}}
            />

            <Text>
                Capital: {capital}
            </Text>

            <Text>
                Idioma: {idioma}
            </Text>
        </View>
    );
}