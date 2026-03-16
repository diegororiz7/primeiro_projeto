import React, {useState} from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from '../styles/stylesPlaylist';
import { Button } from 'react-native-web';

function PlayListItem({banda, musica, imagem, alterarContador}){
    const [ligado, setLigado] = useState(false);
    //const valor = useState(0);

    function alternarMusica(){
        if(ligado){
            alterarContador((valor) => valor - 1);
        }else{
            alterarContador((valor) => valor + 1);
        }        
        setLigado(!ligado);
    }

    return(
        <View style = {styles.card}>
            <Image
                style = {styles.imagem}
                source = {{uri: imagem}}
            />

            <Text style = {styles.musica}>{musica}</Text>
            <Text style = {styles.banda}>{banda}</Text>

            <Text style = {[styles.status,
                {color: ligado ? '#2ecc71' : '#e74c3c'}
            ]}>
                {ligado ? 'Tocando' : 'Parado'}
            </Text>
            
            <View style = {styles.botao}>
                <Button
                    onPress={alternarMusica}
                    title = {ligado ? 'Pause' : 'Play'}
                    color=  {ligado ? '#e74c3c' : '#2ecc71'}
                />
            </View>
        </View>
    );
}

export default function PlayListApp(){

    const musicas = [
        {
            banda: 'Restart',
            musica: 'Te levo comigo',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Banda_Restart_2009.jpg/250px-Banda_Restart_2009.jpg'
        },
        {
            banda: 'Capital Iniciaial',
            musica: 'À sua maneira',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Boas_Vibes.jpg/330px-Boas_Vibes.jpg'
        },
        {
            banda: 'Seu Jorge',
            musica: 'Burguesinha',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/26_-_Seu_Jorge-002_%2817133102915%29.jpg/250px-26_-_Seu_Jorge-002_%2817133102915%29.jpg'
        },
        {
            banda: 'AC/DC',
            musica: 'Thunderstruck',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/ACDC_In_Tacoma_2009.jpg/250px-ACDC_In_Tacoma_2009.jpg'
        }
    ];

    const [tocando, setTocando] = useState(0);

    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.scroll}>

                <Text style = {styles.titulo}>Rádio FASM</Text>

                <Text style = {styles.contador}>Tocando agora: {tocando} músicas</Text>

                {musicas.map((musicas, index) => (
                    <PlayListItem
                        key = {index}
                        musica = {musicas.musica}
                        banda = {musicas.banda}
                        imagem = {musicas.imagem}
                        alterarContador={setTocando}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
