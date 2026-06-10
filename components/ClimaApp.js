import React, {useState, useEffect} from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/stylesClima';

const STORAGE_KEY = '@ClimaHistorico';

export default function ClimaApp(){

    const [cidade, setCidade] = useState('');
    const [dados, setDados] = useState(null);
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);

    function converterC(c){
        return (c * 9/5) + 32;
    }

    return(
        <View style = {styles.container}>

        </View>
    );
}