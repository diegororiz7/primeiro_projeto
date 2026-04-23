import React, {useState, useEffect, useRef} from 'react';
import {
    View, Text, TextInput, Animated, Button,
    ActivityIndicator, TouchableWithoutFeedback, StyleSheet
}from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/stylesMoeda';

export default function MoedaApp(){
    const [valor, setValor] = useState('');
    const [de, setDe] = useState('USD');
    const [para, setPara] = useState('BRL');
    const [cotacao, setCotacao] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const moedas = ['BRL', 'USD', 'EUR', 'CAD', 'ARS', 'JPY', 'BTC'];

    return(
        <View style={styles.container}>
            
        </View>
    );
}