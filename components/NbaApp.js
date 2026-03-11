import React, { useState } from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from '../styles/stylesNBA';

export function NBAProps(props){
    return(
        <View style = {styles.card}>
            <Image
                style = {styles.image}
                source={props.imagem}
            />

            <View>
                <Text style = {[styles.time, {color: props.cor}]}>
                    {props.time}
                </Text>

                {props.mostrarConteudo && (
                    <>
                        <Text style = {styles.texto}>
                            Títulos: {props.titulos}
                        </Text>

                        <Text style = {styles.texto}>
                            Local: {props.local}
                        </Text>

                        <Text style = {styles.texto}>
                            Macote: {props.mascote}
                        </Text>
                    </>
                )}
            </View>
        </View>
    );
}

export default function NbaApp(){

    const [mostrarConteudo, setMostrarConteudo] = useState(false);

    const times = [
        {
            time: 'Lakers',
            titulo: 17,
            cor: '#FDB927',
            local: 'Los Angeles',
            imagem: require('../assets/images/lakers.png')
        },
        {
            time: 'Celtics',
            cor: '#007A33',
            titulos: 18,
            local: 'Boston',
            imagem: require('../assets/images/celtics.png')
        },        
        {
            time: 'Spurs',
            titulos: 6,
            cor: '#C4CED4',
            local: 'San Antonio',
            imagem: require('../assets/images/spurs.png')
        },
        {
            time: 'Bulls',
            titulos:'6',
            local:'Chicago',
            cor:'#CE1141',
            imagem: require('../assets/images/bulls.png')
        },
        {
            time: 'Warriors',
            titulos:'7',
            local:'San Francisco',
            cor:'#1D428A',
            imagem: require('../assets/images/warriors.png')
        }
    ];

    //Estrutura Spread
    /*const Lakers = {
        time: 'Celtics',
        cor: '#007A33',
        titulos: 18,
        local: 'Boston',
        imagem: require('../assets/images/celtics.png'),
        mascote: 'Irlandês'
    }*/

    //Chamada Spread no Return
    /*<NBAProps
                {...Lakers}
    />*/

    return(        

        <View style = {styles.container}>
            <Text style = {styles.titulo}>
                Maiores campeões da NBA
            </Text>

            <Button
                title = {mostrarConteudo ? 'Ocultar informação' : 'Exibir informação'}
                color={mostrarConteudo ? 'red' : 'green'}
                onPress={() => setMostrarConteudo(!mostrarConteudo)}
            />
            
            {times.map((times, index) => (
                <NBAProps
                    key = {index}
                    {...times}
                    mostrarConteudo = {mostrarConteudo}
                />
            ))}
        </View>
    );
}